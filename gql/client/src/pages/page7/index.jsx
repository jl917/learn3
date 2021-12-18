import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from './redux';

const Page = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const nextCount = useCallback(() => dispatch(setCount('next')), [dispatch]);
  const prevCount = useCallback(() => dispatch(setCount('prev')), [dispatch]);

  return (
    <div>
      <h1>{count}</h1>
      <div>page component</div>
      <button type="button" onClick={nextCount}>
        +1
      </button>
      <button type="button" onClick={prevCount}>
        -1
      </button>
    </div>
  );
};

export default Page;
