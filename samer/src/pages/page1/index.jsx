import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount1, nc, pc } from './redux';

const Page1 = () => {
  const count1 = useSelector((state) => state.count1);
  const dispatch = useDispatch();
  const setCount = useCallback((type) => dispatch(setCount1(type)), [dispatch]);
  const nextCount = useCallback(() => dispatch(nc), [dispatch]);
  const prevCount = useCallback(() => dispatch(pc), [dispatch]);

  return (
    <div>
      <h1>{`reudx ${count1}`}</h1>
      <div>page1 component</div>
      <button type="button" onClick={() => setCount('next')}>
        +1
      </button>
      <button type="button" onClick={() => setCount('prev')}>
        -1
      </button>
      <br />
      <button type="button" onClick={nextCount}>
        +1
      </button>
      <button type="button" onClick={prevCount}>
        -1
      </button>
    </div>
  );
};

export default Page1;
