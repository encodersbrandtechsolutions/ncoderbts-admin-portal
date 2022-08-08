import { gql } from 'apollo-angular';

export const AUTHENTICATE_GQL = gql`
  mutation AdminSignIn($input: AdminSignInInput!) {
    adminSignIn(input: $input) {
      accessToken
    }
  }
`;
