import { Scalars } from './common';

export type MutationAdminSignInArgs = {
  input: AdminSignInInput;
};

export type AdminSignInInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type MutationAdminSignInRes = {
  __typename?: 'adminSignIn';
  adminSignIn: AdminAuthGql;
};

export type AdminAuthGql = {
  __typename?: 'AdminAuthGql';
  accessToken: Scalars['String'];
};
