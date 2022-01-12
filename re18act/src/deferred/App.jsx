import React, { useState, useDeferredValue } from 'react';

const Summary = (props) => {
  const { name, age } = useDeferredValue(props)
  return (
    <div>
      {name} - {age}
    </div>
  )
}

const Detail = ({ name, age }) => {
  return (
    <div>
      {name} - {age}
    </div>
  )
}

function App () {

  const [user, setUser] = useState({
    name: 'dao',
    age: 12,
  });

  return (
    <div>
      <Detail {...user} />
      <Summary {...user} /> 
    </div>
  );
}

export default App;
