import * as homeAction from '../actions/homeAction';
import * as TYPES from '../actions/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { homeApi } from '../api/homeApi';

function* getDemo() {
  try {
    const response = yield call(homeApi.getDemo);
    yield put(homeAction.demoSuccess(response.data));
  } catch (error) {
    yield put(homeAction.demoFailure());
  }
}
function* getProduct(action) {
  try {
    const response = yield call(homeApi.getProduct);
    if (action.data.response){
        action.data.response(response.data);
    }
  } catch (error) {
    yield put(homeAction.demoFailure());
  }
}
function* getProductDetails(action) {
  try {
    const response = yield call(homeApi.getProductDetails,action.data);
    if (action.data.response){
      action.data.response(response.data);
    }
  } catch (error) {
  }
}

function* home() {
  yield all([takeLatest(TYPES.GET_DEMO_START, getDemo)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_START, getProduct)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_DETAILS_START, getProductDetails)]);
}

export default home;
