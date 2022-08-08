import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConsultantService } from './consultant.service';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { AUTHENTICATE_GQL } from '../gql/admin';
import {
  AdminSignInInput,
  MutationAdminSignInArgs,
  MutationAdminSignInRes,
} from '../interfaces/admin';

export const TOKEN_KEY = 'access-token';
export const FIREBASE_TOKEN_KEY = 'firebase-access-token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get token() {
    return localStorage.getItem(TOKEN_KEY);
  }

  constructor(private apollo: Apollo) {
    this.checkToken();
  }

  checkToken() {
    if (this.token && this.token) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  authenticate(
    input: AdminSignInInput
  ): Observable<MutationResult<MutationAdminSignInRes>> {
    return this.apollo.mutate<MutationAdminSignInRes>({
      mutation: AUTHENTICATE_GQL,
      variables: { input },
    });
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    this.isAuthenticated.next(true);
  }

  removeToken(): void {
    this.isAuthenticated.next(false);
    localStorage.removeItem(TOKEN_KEY);
  }
}
