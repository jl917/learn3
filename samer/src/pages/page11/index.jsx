import React, { useState, useCallback } from 'react';
import {atom, useRecoilCallback, useRecoilState, useGotoRecoilSnapshot} from 'recoil';

const st = atom({
  key: 'cc',
  default: 0,
})

const Page = () => {
  const [list,setList] = useState([]);
  const [cc, setcc] = useRecoilState(st);
  const gotoSnapshot = useGotoRecoilSnapshot();
  // 의존성에 따라 갱신되는 메모이즈된 함수를 생성한다. 
  // 생성된 함수에 스냅샷과 상태를 다루는 객체 및 함수가 함께 전달된다
  // updateSnapshot을 명시적으로 실행할 때만 스냅샷 정보를 가져와서 처리한다.
  const updateSnapshot = useRecoilCallback((recoilCallback) => async () => {
    const {snapshot, gotoSnapshot, set, reset} = recoilCallback;
    setList([...list,snapshot]);
    const count = await snapshot.getPromise(st); // get snapshot value
    // const newSnapshot = await snapshot.map( ({set}) => set(st, new Date().getTime()) ) // set snapshot value
  });

  return (
    <div>
      <h1>useRecoilCallback - count{cc}</h1>
      <button onClick={() => setcc(cc + 1)}>add cc</button>
      <button onClick={updateSnapshot}>save to snapshot</button>
      <ul>
        {
          list.map((snapshot, index) => (
            <li key={index}>
              <button onClick={() => gotoSnapshot(snapshot)}>snapshot #{index + 1}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Page;
