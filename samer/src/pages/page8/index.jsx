import React from 'react';
import { atom, selector, atomFamily, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState, isRecoilValue } from 'recoil';

const st = atom({
  key: 'cc', // 用于在内部标识原子的唯一字符串。 相对于整个应用程序中的其他atoms和selectors，该字符串应该是唯一的。
  default: 0, // atoms或Promise或另一个原子或选择器的初始值，代表相同类型的值。
  // dangerouslyAllowMutability? : boolean // ？？？？？ 
})

const countF = atomFamily({
  key: 'count',
  default: arg1 => `arg - ${arg1}`
});

const stProxy = selector({
  key: 'ccProxy',

  // 一个函数return值或者Promise 
  get: ({ get }) => {
    // 参数get 用于获取其他atoms/selectors值的函数。
    const stValue = get(st);
    const unit = 'px';
    return `${stValue}${unit}`;
  },
  set: ({set}, newValue) => {
    console.log(newValue)
    return set(st, newValue * 2);
  },
});

console.log(isRecoilValue(st)) // true
console.log(isRecoilValue(stProxy)) //true
console.log(isRecoilValue(123)) // faslse


const Page = () => {
  // atom
  const [cc, setcc] = useRecoilState(st) // read, edit
  const read_cc = useRecoilValue(st) // only read
  const edit_cc = useSetRecoilState(st) // only edit
  const reset_cc = useResetRecoilState(st) // reset

  const [count, setCount] = useRecoilState(countF('0')) // read, edit
  
  // selector
  const [dd, setdd] = useRecoilState(stProxy);

  return (
    <div>
      <div className="list">
        <h1>atom</h1>
        <div>useRecoilState {cc}</div>
        <div>useRecoilValue - onlyread {read_cc}</div>
        <button onClick={() => setcc(cc + 1)}>useRecoilState + </button>
        <button onClick={() => edit_cc(100)}>useSetRecoilState 100</button>
        <button onClick={() => reset_cc()}>useSetRecoilState 0</button>

        <h1>selector</h1>
        <div>watch to atom {dd}</div>
        <button onClick={() => setdd(cc)}>selector set 0</button>

        <h1>atom family</h1>
        <div>{count}</div>
        <button onClick={() => setCount(countF(`${new Date()}`))}>selector set 0</button>

      </div>
    </div>
  );
};

export default Page;
