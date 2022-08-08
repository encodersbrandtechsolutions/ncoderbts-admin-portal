import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { GET_BASIC_PROFILE_GQL } from '../gql/consultant';
import {
  GET_SERVICE_CATEGORIES_GQL,
  GET_SERVICE_CATEGORY_SPECIALITY_GQL,
} from '../gql/service-category';
import { QueryGetServiceCategoriesRes } from '../interfaces/service-category';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  get getServiceCategories(): QueryRef<QueryGetServiceCategoriesRes> {
    return this.apollo.watchQuery<QueryGetServiceCategoriesRes>({
      query: GET_SERVICE_CATEGORIES_GQL,
      pollInterval: 1000,
    });
  }

  get getServiceSpeciality(): QueryRef<QueryGetServiceCategoriesRes> {
    return this.apollo.watchQuery<QueryGetServiceCategoriesRes>({
      query: GET_SERVICE_CATEGORY_SPECIALITY_GQL,
      pollInterval: 1000,
    });
  }
}
