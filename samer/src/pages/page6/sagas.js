import { put, takeEvery, all, delay } from 'redux-saga/effects';
import {
  SAGA_INCREMENT,
  SAGA_DECREMENT,
  SAGA_INCREMENT_ASYNC,
  SAGA_DECREMENT_ASYNC,
} from './constants';

function* sagaIncAsyncCount() {
  yield delay(1000);
  yield put({ type: SAGA_INCREMENT });
}

function* sagaDecAsyncCount() {
  yield delay(1000);
  yield put({ type: SAGA_DECREMENT });
}

export default function* watchAsync() {
  yield all([
    takeEvery(SAGA_INCREMENT_ASYNC, sagaIncAsyncCount),
    takeEvery(SAGA_DECREMENT_ASYNC, sagaDecAsyncCount),
  ]);
}
