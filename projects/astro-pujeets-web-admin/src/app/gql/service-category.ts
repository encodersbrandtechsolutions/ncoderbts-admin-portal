import { gql } from 'apollo-angular';

export const GET_SERVICE_CATEGORIES_GQL = gql`
  query GetServiceCategories {
    getServiceCategories {
      _id
      title
    }
  }
`;

export const GET_SERVICE_CATEGORY_SPECIALITY_GQL = gql`
  query GetServiceCategories {
    getServiceCategories {
      _id
      title
      specializations {
        _id
        title
      }
    }
  }
`;
