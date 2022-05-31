import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const mock = () => new Promise((resolve, reject) => {
  resolve('success');
})

function App () {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  console.log('render')

  function handleClickPrev () {
    setCount(c => c - 1);
    setFlag(f => !f);
  }

  function handleClickNext () {
    // promise
    mock().then(() => {
      // 18버전 micro task,  macro task에서 도 동일하게 처리, 이하 버전에서는 별도 처리로 두번 렌더.
      // 단 조건은 createRoot api 사용.
      setCount(c => c + 1);
      setFlag(f => !f);
    });

    // settimeout
    // setTimeout(() => {
    //   setCount(c => c + 1);
    //   setFlag(f => !f);
    // }, 1000)

    // addeventListener
    // document.getElementById('root').addEventListener('click', () => {
    //   setCount(c => c + 1);
    //   setFlag(f => !f);
    // })
  }

  function handleClickNext2 () {
    // automatic batching 차단.(비추)
    mock().then(() => {
      flushSync(() => {
        setFlag(f => !f);
      });
      setCount(c => c + 1);
    });
  }

  return (
    <div>
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>

      <button onClick={handleClickNext2}>Next </button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}

export default App;
