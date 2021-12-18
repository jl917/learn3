/* eslint-disable no-param-reassign */
import React from 'react';
import produce from 'immer';

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

const nextState = produce(baseState, (draftState) => {
  draftState.push({ todo: 'Tweet about it', done: true });
  draftState[1].done = true;
});

const Page = () => {
  return (
    <div>
      <div>
        <h1>immer base</h1>
        <h3>baseState</h3>
        <ul>
          {baseState.map((e) => (
            <li key={e.todo}>{`${e.done} - ${e.todo}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>nextState</h3>
        <ul>
          {nextState.map((e) => (
            <li key={e.todo}>{`${e.done} - ${e.todo}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
