import { useState } from 'react';
import React, { startTransition, useTransition, useDeferredValue } from 'react/cjs/react.development';

const arr = new Array(10000).fill(0);

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
      setValue(e.target.value);
    })
  }

  // useDeferedValue
  const a = useDeferredValue(value);

  return (
    <div>
      <h1>{a}</h1>
      <div>
        <input onChange={onChange} />
      </div>
      <div>
        <input onChange={onChange2} />
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
