import * as TYPES from './types';
import {GET_PRODUCT_START} from './types';

export const demoStart = () => {
  return { type: TYPES.GET_DEMO_START };
};

export function demoSuccess(data) {
  return { type: TYPES.GET_DEMO_SUCCESS, data };
}

export function demoFailure() {
  return { type: TYPES.GET_DEMO_FAILURE };
}

export const productActionStart = (data) => {
  return { type: TYPES.GET_PRODUCT_START ,data};
};
export const productDetailsActionStart = (data) => {
  return { type: TYPES.GET_PRODUCT_DETAILS_START ,data};
};
