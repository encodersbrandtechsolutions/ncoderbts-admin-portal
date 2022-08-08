/* eslint-disable @typescript-eslint/naming-convention */
import { Maybe } from 'graphql/jsutils/Maybe';
import { Scalars, Exact } from './common';
import { ServiceSpeciality } from './service-category';

export enum AuthType {
  Google = 'Google',
  Facebook = 'Facebook',
}

export type MutationAddConsultantArgs = {
  input: AddConsultantInput;
};

export type MutationUpdateConsultantArgs = {
  input: UpdateConsultantInput;
};

export type MutationDeleteConsultantArgs = {
  id: Scalars['String'];
};

export type MutationConsultantAwardsRes = {
  __typename?: 'deleteConsultantAward';
  deleteConsultantAward: ConsultantAwardsInput;
};

export type MutationAddConsultantRes = {
  __typename?: 'addConsultant';
  addConsultant: ConsultantGql;
};

export type MutationUpdateConsultantRes = {
  __typename?: 'updateConsultant';
  updateConsultant: ConsultantGql;
};

export type QueryGetConsultantArgs = {
  id: Scalars['String'];
};

export type QueryGetConsultantProfileRes = {
  __typename?: 'getProfile';
  getProfile: ConsultantGql;
};

export type QueryGetConsultantsRes = {
  __typename?: 'getConsultants';
  getConsultants: Array<ConsultantGql>;
};

export type ServiceCategoryGql = {
  __typename?: 'ServiceCategoryGQL';
  _id: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ConsultantBioGql = {
  __typename?: 'ConsultantBioGQL';
  dateOfBirth: Scalars['String'];
  shortDescription: Scalars['String'];
  description: Scalars['String'];
};

export type ConsultantQualificationDegreeGql = {
  __typename?: 'ConsultantQualificationDegreeGQL';
  degree: Scalars['String'];
  yearOfPassing: Scalars['String'];
};

export type ConsultantQualificationGql = {
  __typename?: 'ConsultantQualificationGQL';
  secondaryEducation: ConsultantQualificationDegreeGql;
  higherEducation: ConsultantQualificationDegreeGql;
  graduation: ConsultantQualificationDegreeGql;
  postGraduation: ConsultantQualificationDegreeGql;
  doctorate: ConsultantQualificationDegreeGql;
};

export type ConsultantWorkExperienceGql = {
  __typename?: 'ConsultantWorkExperienceGQL';
  profile: Scalars['String'];
  description: Scalars['String'];
  totalYearsOfExperience: Scalars['Int'];
};

export type ConsultantAwardsGql = {
  __typename?: 'ConsultantAwardsGQL';
  name: Scalars['String'];
  file: Scalars['String'];
};

export type ConsultantServiceSpecialityGql = {
  __typename?: 'ConsultantServiceSpecialityGQL';
  _id: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
  price: Scalars['Float'];
  status: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ConsultantServiceCategoryGql = {
  __typename?: 'ConsultantServiceCategoryGQL';
  serviceCategory: ServiceCategoryGql;
  specializations: Array<ConsultantServiceSpecialityGql>;
};

export type ConsultantGql = {
  __typename?: 'ConsultantGQL';
  _id: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
  profilePictures: Maybe<Array<Maybe<ConsultantAwardsGql>>>;
  mobile: Scalars['String'];
  email: Scalars['String'];
  authType: AuthType;
  bio: ConsultantBioGql;
  qualification: ConsultantQualificationGql;
  workExperience: ConsultantWorkExperienceGql;
  awards: Array<ConsultantAwardsGql>;
  serviceCategories: Array<ConsultantServiceCategoryGql>;
};

export type AddConsultantInput = {
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firebaseToken?: Maybe<Scalars['String']>;
  authType: AuthType;
  bio?: Maybe<ConsultantBioInput>;
  qualification?: Maybe<ConsultantQualificationInput>;
  workExperience?: Maybe<ConsultantWorkExperienceInput>;
  awards?: Maybe<Array<ConsultantAwardsInput>>;
  serviceCategories?: Maybe<Array<ConsultantServiceCategoryInput>>;
};

export type ConsultantBioInput = {
  dateOfBirth: Scalars['DateTime'];
  shortDescription: Scalars['String'];
  description: Scalars['String'];
};

export type ConsultantQualificationInput = {
  secondaryEducation?: Maybe<ConsultantQualificationDegreeInput>;
  higherEducation?: Maybe<ConsultantQualificationDegreeInput>;
  graduation?: Maybe<ConsultantQualificationDegreeInput>;
  postGraduation?: Maybe<ConsultantQualificationDegreeInput>;
  doctorate?: Maybe<ConsultantQualificationDegreeInput>;
};

export type ConsultantQualificationDegreeInput = {
  degree: Scalars['String'];
  yearOfPassing: Scalars['Int'];
};

export type ConsultantWorkExperienceInput = {
  profile: Scalars['String'];
  description: Scalars['String'];
  totalYearsOfExperience: Scalars['Int'];
};

export type ConsultantAwardsInput = {
  name: Scalars['String'];
  file: Scalars['String'];
};

export type ConsultantServiceCategoryInput = {
  serviceCategoryId: Scalars['String'];
  specializations?: Maybe<Array<Scalars['String']>>;
};

export type UpdateConsultantInput = {
  firebaseToken?: Maybe<Scalars['String']>;
  bio?: Maybe<ConsultantBioInput>;
  qualification?: Maybe<ConsultantQualificationInput>;
  workExperience?: Maybe<ConsultantWorkExperienceInput>;
  _id?: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  awards?: Maybe<Array<ConsultantFileUpdateInput>>;
  pictures?: Maybe<Array<ConsultantFileUpdateInput>>;
  serviceCategories?: Maybe<Array<ConsultantServiceCategoryUpdateInput>>;
};

export type ConsultantFileUpdateInput = {
  name: Scalars['String'];
  file: Scalars['String'];
  _id?: Maybe<Scalars['String']>;
};

export type ConsultantServiceCategoryUpdateInput = {
  serviceCategoryId: Scalars['String'];
  title?: Scalars['String'];
  checked?: Scalars['Boolean'];
  specializations?: Maybe<Array<Scalars['String']>>;
  allSpecializations?: Maybe<Array<ServiceSpeciality>>;
  selectedSpecializations?: Maybe<Array<Partial<ServiceSpeciality>>>;
};

export type FindUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;

export type FindUserQuery = { __typename?: 'Query' } & {
  getConsultant: { __typename?: 'ConsultantGQL' } & UserFieldsFragment;
};

export type UserFieldsFragment = { __typename?: 'ConsultantGQL' } & Pick<
  ConsultantGql,
  '_id'
>;
