import { gql } from 'apollo-angular';

export const UPDATE_CONSULTANT_GQL = gql`
  mutation UpdateConsultant($input: UpdateConsultantInput!) {
    updateConsultant(input: $input) {
      _id
    }
  }
`;

export const DELETE_CONSULTANT_AWARD_GQL = gql`
  mutation DeleteConsultantAward($input: ConsultantAwardsUpdateInput!) {
    deleteConsultantAward(input: $input) {
      name
    }
  }
`;

export const DELETE_CONSULTANT_PROFILE_PICTURE_GQL = gql`
  mutation deleteConsultantProfilePicture(
    $input: ConsultantAwardsUpdateInput!
  ) {
    deleteConsultantProfilePicture(input: $input) {
      name
    }
  }
`;

export const GET_CONSULTANTS_GQL = gql`
  query GetConsultants {
    getConsultants {
      _id
      name
      picture
    }
  }
`;

export const GET_BASIC_PROFILE_GQL = gql`
  query GetConsultantBasicProfile($getConsultantId: String!) {
    getProfile {
      _id
      name
      picture
      mobile
      email
    }
  }
`;

export const GET_PROFILE_BIO_GQL = gql`
  query GetConsultantBio {
    getProfile {
      bio {
        dateOfBirth
        shortDescription
        description
      }
    }
  }
`;

export const GET_PROFILE_QUALIFICATION_GQL = gql`
  query GetConsultantQualification {
    getProfile {
      qualification {
        secondaryEducation {
          degree
          yearOfPassing
        }
        higherEducation {
          degree
          yearOfPassing
        }
        graduation {
          degree
          yearOfPassing
        }
        postGraduation {
          degree
          yearOfPassing
        }
        doctorate {
          degree
          yearOfPassing
        }
      }
    }
  }
`;

export const GET_PROFILE_WORK_EXPERIENCE_GQL = gql`
  query GetConsultantWorkExperience {
    getProfile {
      workExperience {
        profile
        description
        totalYearsOfExperience
      }
    }
  }
`;

export const GET_PROFILE_AWARDS_GQL = gql`
  query GetConsultantAwards {
    getProfile {
      awards {
        name
        file
      }
    }
  }
`;

export const GET_PROFILE_PICTURES_GQL = gql`
  query GetConsultantPictures {
    getProfile {
      profilePictures {
        name
        file
      }
    }
  }
`;

export const GET_PROFILE_SERVICE_CATEGORY_GQL = gql`
  query GetConsultantServiceCategory {
    getProfile {
      _id
      serviceCategories {
        serviceCategory {
          _id
          title
        }
        specializations {
          _id
          title
        }
      }
    }
  }
`;

export const GET_PROFILE_SPECIALIZATIONS_GQL = gql`
  query GetConsultantSpecializations {
    getProfile {
      serviceCategories {
        serviceCategory {
          _id
          title
        }
        specializations {
          _id
          title
          price
        }
      }
    }
  }
`;

export const UPDATE_PROFILE_PICTURE_GQL = gql`
  mutation UploadProfilePicture($file: Upload!, $name: String!) {
    uploadProfilePicture(file: $file, name: $name)
  }
`;
