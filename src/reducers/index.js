import { combineReducers } from 'redux';

import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default (state, action) => {
  return rootReducer(state, action);
};
