import * as homeAction from '@actions/homeAction';
import * as TYPES from '@actions/types';
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

function* home() {
  yield all([takeLatest(TYPES.GET_DEMO_START, getDemo)]);
}

export default home;
