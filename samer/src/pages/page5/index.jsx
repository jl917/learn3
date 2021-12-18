import React, { useState, useCallback } from 'react';
import produce from 'immer';
import { Name, Age } from './User';

const Page = () => {
  const [user, setUser] = useState({
    name: {
      type: 'string',
      text: 'dao',
    },
    age: new Date().getTime(),
  });
  const click = useCallback(() => {
    setUser({ ...user, age: new Date().getTime() });
  });
  const click2 = useCallback(() => {
    setUser(
      produce((draft) => {
        draft.name.text = 'lang';
        draft.age = new Date().getTime();
      }),
    );
  });
  return (
    <div>
      <h1>Immer & react memo</h1>
      {user ? (
        <>
          <Name name={user.name} />
          <Age name={user.name} age={user.age} />
        </>
      ) : (
        ''
      )}
      <button onClick={click} type="button">
        setUser basic
      </button>
      <button onClick={click2} type="button">
        setUser immer
      </button>
    </div>
  );
};

export default Page;
