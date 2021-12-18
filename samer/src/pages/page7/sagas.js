import { put, takeEvery, all, delay, fork, take, cancelled, cancel } from 'redux-saga/effects';
import NProgress from 'nprogress';
import axios from 'axios';
import {
  BTN_LOADING,
  GET_DATA_ASYNC,
  BTN_LOADING_DONE,
  USER_DATAS,
  CANCEL_DATA_ASYNC,
} from './constants';

function facData(data) {
  const result = [];
  data.forEach((e) => {
    result.push({
      key: e.login.username,
      name: `${e.name.first} ${e.name.last}`,
      email: e.email,
      phone: e.phone,
      id: e.login.username,
      date: e.registered.date,
      gender: e.gender,
      picture: e.picture.thumbnail,
    });
  });
  return result;
}

function* sagaGetDataAsync() {
  try {
    while (true) {
      NProgress.start();
      yield put({ type: BTN_LOADING });
      yield delay(3000);
      NProgress.set(0.6);
      const { data } = yield axios.get('https://randomuser.me/api/?results=10');
      yield put({ type: USER_DATAS, payload: facData(data.results) });
      // yield put({ type: BTN_LOADING_DONE });
      yield put({ type: CANCEL_DATA_ASYNC });
    }
  } finally {
    if (yield cancelled()) {
      NProgress.done();
      yield put({ type: BTN_LOADING_DONE });
    }
  }
}

export default function* watchAsync() {
  while (yield take(GET_DATA_ASYNC)) {
    const bgTask = yield fork(sagaGetDataAsync);
    yield take(CANCEL_DATA_ASYNC);
    yield cancel(bgTask);
  }
}
