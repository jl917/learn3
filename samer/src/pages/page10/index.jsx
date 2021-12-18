import React, { useState } from 'react';
import {useRecoilSnapshot, useRecoilState, atom, useRecoilTransactionObserver_UNSTABLE, useSetRecoilState} from 'recoil';

const st = atom({
  key: 'cc',
  default: 0,
})

const Page = () => {
  // useRecoilSnapshot
  // 컴포넌트는 상태가 변할 때마다 렌더링된다. 
  const [list, setList] = useState([]);
  const snapshot = useRecoilSnapshot(); // state변경될 때마다 1번씩 실행
  const getSnapShot = () => {
    setList([...list, snapshot])
  }

  // useRecoilTransactionObserver
  // useRecoilTransactionObserver는 컴포넌트를 다시 렌더링하지 않는다. 
  const setcc = useSetRecoilState(st);
  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    // setList([...list, snapshot])
    console.log(123123)
  });

  return (
    <div>
      <h1>{list.length}</h1>

      <h1>useRecoilSnapshot</h1>
      <button onClick={getSnapShot}>get snap shot</button>
      <button onClick={() => console.log(list)}>get log</button>

      <h1>useRecoilTransactionObserver</h1>
      <button onClick={() => setcc(new Date().getTime())}>change atom</button>

    </div>
  );
};

export default Page;
