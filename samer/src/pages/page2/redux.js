const NEXT_COUNT2 = 'NEXT_COUNT2';
const PREV_COUNT2 = 'PREV_COUNT2';

export const setCount2 = (type) => ({
  type: type === 'next' ? NEXT_COUNT2 : PREV_COUNT2,
});

export const countReducer2 = (state = 0, action) => {
  if (action.type === NEXT_COUNT2) {
    return state + 1;
  }
  if (action.type === PREV_COUNT2) {
    return state - 1;
  }
  return state;
};
