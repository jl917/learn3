import produce from 'immer';

import {
  BTN_LOADING,
  GET_DATA_ASYNC,
  BTN_LOADING_DONE,
  USER_DATAS,
  CANCEL_DATA_ASYNC,
} from './constants';

export const loading = () => ({
  type: BTN_LOADING,
});
export const getDataAsync = () => ({
  type: GET_DATA_ASYNC,
});
export const cancelDataAsync = () => ({
  type: CANCEL_DATA_ASYNC,
});

export const btnLoading = produce((draft, action) => {
  if (action.type === BTN_LOADING) {
    return true;
  }
  if (action.type === BTN_LOADING_DONE) {
    return false;
  }
}, false);

export const userDatas = produce((draft, action) => {
  if (action.type === USER_DATAS) {
    return action.payload;
  }
}, []);
