import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, iaddTodo, iremoveTodo } from './redux';
import List from './List';
import Items from './Items';

let i = 0;

const Page = () => {
  // Basic
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch(
      addTodo({
        todo: new Date().getTime(),
        id: i,
      }),
    );
    i += 1;
  }, [dispatch]);

  const remove = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch],
  );
  // immer
  const itodoList = useSelector((state) => state.itodoList);
  const iadd = useCallback(() => {
    dispatch(
      iaddTodo({
        todo: new Date().getTime(),
        id: i,
      }),
    );
    i += 1;
  }, [dispatch]);

  const iremove = useCallback(
    (id) => {
      dispatch(iremoveTodo(id));
    },
    [dispatch],
  );
  return (
    <div>
      <h1>basic redux and immer redux</h1>
      <div>
        <h3>TodoList Basic</h3>
        <div>
          <button onClick={add} type="button">
            add
          </button>
        </div>
        <Items itodoList={todoList} remove={remove} />
        {/* <ul>
          {todoList.map((e) => (
            <List todo={e.todo} key={e.id} remove={remove} />
          ))}
        </ul> */}
      </div>
      <div>
        <h3>TodoList Immer</h3>
        <div>
          <button onClick={iadd} type="button">
            add
          </button>
        </div>
        <Items itodoList={itodoList} remove={remove} />
        {/* {itodoList.map((e) => (
          <List todo={e.todo} key={e.id} remove={remove} />
        ))} */}
      </div>
    </div>
  );
};

export default Page;
