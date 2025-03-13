import { get } from './index';

const getDemo = async () => {
  return get('v1/demo/url', {}, false);
};

export const homeApi = {
  getDemo,
};
