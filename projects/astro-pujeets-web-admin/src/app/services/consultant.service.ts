import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  DELETE_CONSULTANT_AWARD_GQL,
  DELETE_CONSULTANT_PROFILE_PICTURE_GQL,
  GET_BASIC_PROFILE_GQL,
  GET_PROFILE_AWARDS_GQL,
  GET_PROFILE_BIO_GQL,
  GET_PROFILE_PICTURES_GQL,
  GET_PROFILE_QUALIFICATION_GQL,
  GET_PROFILE_SERVICE_CATEGORY_GQL,
  GET_PROFILE_SPECIALIZATIONS_GQL,
  GET_PROFILE_WORK_EXPERIENCE_GQL,
  UPDATE_CONSULTANT_GQL,
} from '../gql/consultant';
import {
  ConsultantAwardsGql,
  MutationConsultantAwardsRes,
  MutationUpdateConsultantRes,
  QueryGetConsultantProfileRes,
  UpdateConsultantInput,
} from '../interfaces/consultant';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultantService {
  constructor(
    private authService: AuthenticationService,
    private apollo: Apollo,
    private http: HttpClient
  ) {}

  get getBasicProfile() {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_BASIC_PROFILE_GQL,
    });
  }

  get getProfileBio(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_BIO_GQL,
    });
  }

  get getProfileQualification(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_QUALIFICATION_GQL,
    });
  }

  get getProfileWorkExperience(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_WORK_EXPERIENCE_GQL,
    });
  }

  get getProfileAwards(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_AWARDS_GQL,
      pollInterval: 1000,
    });
  }

  get getProfilePictures(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_PICTURES_GQL,
      pollInterval: 1000,
    });
  }

  get getProfileServiceCategories(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_SERVICE_CATEGORY_GQL,
    });
  }

  get getProfileSpecializations(): QueryRef<QueryGetConsultantProfileRes> {
    return this.apollo.watchQuery<QueryGetConsultantProfileRes>({
      query: GET_PROFILE_SPECIALIZATIONS_GQL,
    });
  }

  updateProfile(
    input: UpdateConsultantInput
  ): Observable<MutationResult<MutationUpdateConsultantRes>> {
    return this.apollo.mutate<MutationUpdateConsultantRes>({
      mutation: UPDATE_CONSULTANT_GQL,
      variables: { input },
    });
  }

  async updateProfilePicture(
    file: Blob,
    name: string
  ): Promise<Observable<any>> {
    const formdata = new FormData();
    formdata.append(
      'operations',
      // eslint-disable-next-line max-len
      `{ "query": "mutation ($file: Upload!, $name: String!) { uploadProfilePicture(file: $file, name: $name) }", "variables": { "file": null, "name": "${name}"} }`
    );
    formdata.append('map', '{ "0": ["variables.file"] }');
    formdata.append('0', file, this.getRandomFileName());

    const token = this.authService.token;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(environment.apiUrl, formdata, {
      headers,
    });
  }

  async updateAward(file: Blob, name: string): Promise<Observable<any>> {
    const formdata = new FormData();
    formdata.append(
      'operations',
      // eslint-disable-next-line max-len
      `{ "query": "mutation ($file: Upload!, $name: String!) { uploadAward(file: $file, name: $name) }", "variables": { "file": null, "name": "${name}"} }`
    );
    formdata.append('map', '{ "0": ["variables.file"] }');
    formdata.append('0', file, this.getRandomFileName());

    const token = this.authService.token;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(environment.apiUrl, formdata, {
      headers,
    });
  }

  deleteAward(
    input: ConsultantAwardsGql
  ): Observable<MutationResult<MutationConsultantAwardsRes>> {
    return this.apollo.mutate<MutationConsultantAwardsRes>({
      mutation: DELETE_CONSULTANT_AWARD_GQL,
      variables: {
        input: {
          name: input.name,
          file: input.file,
        },
      },
    });
  }

  deleteProfilePicture(
    input: ConsultantAwardsGql
  ): Observable<MutationResult<MutationConsultantAwardsRes>> {
    return this.apollo.mutate<MutationConsultantAwardsRes>({
      mutation: DELETE_CONSULTANT_PROFILE_PICTURE_GQL,
      variables: {
        input: {
          name: input.name,
          file: input.file,
        },
      },
    });
  }

  private getRandomFileName() {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const random = ('' + Math.random()).substring(2, 8);
    const randomNumber = timestamp + random;
    return randomNumber + '.jpg';
  }
}
