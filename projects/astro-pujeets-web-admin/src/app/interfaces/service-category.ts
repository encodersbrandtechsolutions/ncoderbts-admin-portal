/* eslint-disable @typescript-eslint/naming-convention */
export type QueryGetServiceCategoriesRes = {
  __typename?: 'getServiceCategories';
  getServiceCategories: Array<ServiceCategory>;
};

export type ServiceCategory = {
  _id: string;
  title: string;
  checked: boolean;
  specializations: ServiceSpeciality[];
};

export type ServiceSpeciality = {
  _id: string;
  title: string;
};
