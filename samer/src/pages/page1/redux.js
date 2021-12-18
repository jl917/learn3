const NEXT_COUNT1 = 'NEXT_COUNT1';
const PREV_COUNT1 = 'PREV_COUNT1';

export const setCount1 = (type) => ({
  type: type === 'next' ? NEXT_COUNT1 : PREV_COUNT1,
});

export const nc = {
  type: NEXT_COUNT1
}

export const pc = {
  type: PREV_COUNT1
}

export const countReducer1 = (state = 0, action) => {
  if (action.type === NEXT_COUNT1) {
    return state + 1;
  }
  if (action.type === PREV_COUNT1) {
    return state - 1;
  }
  return state;
};
