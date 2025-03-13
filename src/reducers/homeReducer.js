import * as TYPES from '@actions/types';

const initialState = {
  demo: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_DEMO_START:
      return { ...state };
    case TYPES.GET_DEMO_SUCCESS:
      return {
        ...state,
        demo: action.data,
      };
    case TYPES.GET_DEMO_FAILURE:
      return { ...state };

    default:
      return state;
  }
};
