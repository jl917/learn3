import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilValueLoadable, useRecoilStateLoadable, atom } from 'recoil';

const getData = () => axios.get('https://randomuser.me/api/?results=10');

const st = atom({
  key: 'dd',
  default: getData(),
})

const Page = () => {
  // loadable
  // const userLoadable = useRecoilValueLoadable(st);
  const [{state, contents}, setUserLoadable] = useRecoilStateLoadable(st);

  return (
    <div>

      <h3>
        {state === 'loading' ? 'loading' : ''}
        {state === 'hasError' ? 'error' : ''}
        {state === 'hasValue' ? contents.data.results[0].login.username : ''}
      </h3>
      <button onClick={() => setUserLoadable(getData())}>새로고침</button>
    </div>
  );
};

export default Page;
