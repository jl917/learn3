import React, { useState, startTransition, useTransition, useDeferredValue, Suspense } from 'react';

const arr = new Array(20000).fill(0);

function App () {
  const [value, setValue] = useState('title');
  const [list] = useState(arr);

  const onChange = (e) => {
    // setValue(e.target.value);
    startTransition(() => {
      setValue(e.target.value);
    })
  }

  // useTransition
  const [pending, startTransition2] = useTransition()

  const onChange2 = (e) => {
    startTransition2(() => {
      setValue(e.target.value)
    })
  }
  // useDeferedValue
  const a = useDeferredValue(value);

  // no startTransition
  const onChange3 = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>{a}</h1>
      <h2>{pending ? "loading" : 'no'}</h2>
      <div>
        <input onChange={onChange} placeholder="startTransition" />
      </div>
      <div>
        <input onChange={onChange2} placeholder="useTransition" />
      </div>
      <div>
        <input onChange={onChange3} placeholder="default" />
      </div>
      <ul>
        {
          list.map((e, i) => <li key={i}>{value} - {i}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
