import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount2 } from './redux';

const Page2 = () => {
  const count2 = useSelector((state) => state.count2);
  const dispatch = useDispatch();
  const setCount = useCallback((type) => dispatch(setCount2(type)), [dispatch]);
  return (
    <div>
      <h1>{`reudx ${count2}`}</h1>
      <div>page2 component</div>
      <button type="button" onClick={() => setCount('next')}>
        +1
      </button>
      <button type="button" onClick={() => setCount('prev')}>
        -1
      </button>
    </div>
  );
};

export default Page2;
