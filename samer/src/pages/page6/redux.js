import {
  SAGA_INCREMENT,
  SAGA_DECREMENT,
  SAGA_INCREMENT_ASYNC,
  SAGA_DECREMENT_ASYNC,
} from './constants';

export const sagaIncCount = () => ({
  type: SAGA_INCREMENT,
});
export const sagaDecCount = () => ({
  type: SAGA_DECREMENT,
});
export const sagaIncAsyncCount = () => ({
  type: SAGA_INCREMENT_ASYNC,
});
export const sagaDecAsyncCount = () => ({
  type: SAGA_DECREMENT_ASYNC,
});

export function sagaCounter(state = 0, action) {
  switch (action.type) {
    case SAGA_INCREMENT:
      return state + 1;
    // case 'INCREMENT_IF_ODD':
    //   return state % 2 !== 0 ? state + 1 : state;
    case SAGA_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
