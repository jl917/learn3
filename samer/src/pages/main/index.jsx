import React from 'react';
import produce from "immer"

const baseState = [
  {
      title: "Learn TypeScript",
      done: true
  },
  {
      title: "Try Immer",
      done: false
  }
]

const nextState = produce(baseState, draftState => {
  draftState.push({title: "Tweet about it"})
  draftState[1].done = true
})

console.log(typeof nextState)
console.log([...baseState, ...nextState])

const Main = () => {
  return <div>Main Component</div>;
};

export default Main;
