import { get } from './index';

const getProduct = async () => {
  return get('api/user/pets/paginated', {}, false);
};
const getProductDetails = async (data) => {
  return get('api/user/pets', data, false);
};

export const homeApi = {
  getProduct,
  getProductDetails
};
