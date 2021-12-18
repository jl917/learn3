import produce from 'immer';
// basic
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoObj) => ({
  type: ADD_TODO,
  payload: todoObj,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const todoList = (state = [], action) => {
  if (action.type === ADD_TODO) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_TODO) {
    return state.filter((e) => e.id !== action.payload);
  }
  return state;
};

// immer
const I_ADD_TODO = 'I_ADD_TODO';
const I_REMOVE_TODO = 'I_REMOVE_TODO';

export const iaddTodo = (todoObj) => ({
  type: I_ADD_TODO,
  payload: todoObj,
});

export const iremoveTodo = (id) => ({
  type: I_REMOVE_TODO,
  payload: id,
});

export const itodoList = produce((draft, action) => {
  if (action.type === I_ADD_TODO) {
    draft.push(action.payload);
  }

  if (action.type === I_REMOVE_TODO) {
    const index = draft.findIndex((e) => e.id === action.payload);
    if (index !== -1) draft.splice(index, 1);
  }
}, []);

// (state = [], action) => {
//   if (action.type === ADD_TODO) {
//     return [...state, action.payload];
//   }
//   if (action.type === REMOVE_TODO) {
//     return state.filter((e) => e.id !== action.payload);
//   }
//   return state;
// };
