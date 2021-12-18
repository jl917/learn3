import React from 'react';
import { atom, useRecoilState } from 'recoil';

const countAtom = atom({
  key: 'count',
  default: 0,
})

const countReducer = () => {
  const [count, setCount] = useRecoilState(countAtom);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  return {
    count,
    inc,
    dec,
  }
}

const App = () => {
  const {count, inc, dec} = countReducer();
  return (
    <div>
      <h1>{count}</h1>
      <div><button onClick={inc}>+</button></div>
      <div><button onClick={dec}>-</button></div>
    </div>
  )
}

export default App;
