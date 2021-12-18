import { take, all, select } from 'redux-saga/effects';
import page6sagas from './pages/page6/sagas';
import page7sagas from './pages/page7/sagas';

function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    // console.log('action', action);
    // console.log('state after', state);
  }
}

export default function* rootSaga() {
  yield all([watchAndLog(), page6sagas(), page7sagas()]);
}
