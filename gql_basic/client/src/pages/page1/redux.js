const NEXT_COUNT = 'NEXT_COUNT';
const PREV_COUNT = 'PREV_COUNT';

export const setCount = (type) => ({
  type: type === 'next' ? NEXT_COUNT : PREV_COUNT,
});

export const countReducer = (state = 0, action) => {
  if (action.type === NEXT_COUNT) {
    return state + 1;
  }
  if (action.type === PREV_COUNT) {
    return state - 1;
  }
  return state;
};
