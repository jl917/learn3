import { atom, useRecoilState } from 'recoil';
import React, { useEffect, useState } from 'react';

console.log(React.version)

const newName = {
  first: 'ju',
  last: 'long',
}

const user1Atom = atom({
  key: 'user1',
  default: {
    name: {
      first: 'dao',
      last: 'lang',
      a:{
        b: {
          c: 'ddd'
        }
      }
    },
    age: 30,
  },
})


const App = () => {

  // const [user,setUser] = useRecoilState(user1Atom);
    const [user,setUser] = useState({
      name: {first: 'dao', last: 'lang'},
      age: 30
    });


  console.log(user.name)

  console.log('刷新')

  const setName = () => {
    setUser({
      age: user.age,
      name: newName
    })
  }

  const setAge = () => {
    setUser({
      age: 20,
      name: user.name
    })
  }
  return (
    <div>
      {`${user.name.first} - ${user.name.last} - ${user.age}`}
      <button onClick={setName}>
        set name
      </button>
      <button onClick={setAge}>
        set age
      </button>
    </div>
  )
}

export default App;
