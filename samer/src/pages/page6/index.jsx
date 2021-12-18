import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sagaDecCount, sagaIncCount, sagaIncAsyncCount, sagaDecAsyncCount } from './redux';

const Page = () => {
  const count = useSelector((state) => state.sagaCounter);
  const dispatch = useDispatch();
  const inc = useCallback(() => dispatch(sagaIncCount()));
  const dec = useCallback(() => dispatch(sagaDecCount()));
  const asyncInc = useCallback(() => dispatch(sagaIncAsyncCount()));
  const asyncDec = useCallback(() => dispatch(sagaDecAsyncCount()));
  return (
    <div>
      <h1>redux saga</h1>
      <div>{count}</div>
      <div>
        <button type="button" onClick={inc}>
          +
        </button>
        <button type="button" onClick={dec}>
          -
        </button>
        <button type="button" onClick={asyncInc}>
          saga +
        </button>
        <button type="button" onClick={asyncDec}>
          saga -
        </button>
      </div>
    </div>
  );
};

export default Page;
