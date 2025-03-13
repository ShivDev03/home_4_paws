import * as TYPES from './types';

export const demoStart = () => {
  return { type: TYPES.GET_DEMO_START };
};

export function demoSuccess(data) {
  return { type: TYPES.GET_DEMO_SUCCESS, data };
}

export function demoFailure() {
  return { type: TYPES.GET_DEMO_FAILURE };
}
