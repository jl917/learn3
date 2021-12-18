import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const user1Atom = atom({
  key: 'user1',
  default: {
    name: 'dao',
    age: 30
  },
})

const App = () => {
  const [user1, setUser1] = useRecoilState(user1Atom);
  return (
    <>
      <User1 />
      <User2 />
    </>
  )
}
// 클릭시 계속 랜더링
// const User1 = () => {
//   const user1 = useRecoilValue(user1Atom);
//   console.log('render user1')
//   return (
//     <div>
//       <h1>user1</h1>
//       <h2>{user1.age}</h2>
//     </div>
//   )
// }

const User1 = () => {
  const user1 = useRecoilValue(user1Atom);
  console.log('render user1')
  return <User {...user1} />
}

const User = React.memo(({ age }) => {
  // age가 변경될때마다 랜딩
  console.log('render User');
  return (
    <div>
      <h1>user1</h1>
      <h2>{age}</h2>
    </div>
  )
})

const User2 = () => {
  const [user1, setUser1] = useRecoilState(user1Atom);
  return (
    <div>
      <h1>user2</h1>
      <h1>{user1.name}</h1>
      <h2>{user1.age}</h2>
      <button onClick={() => setUser1({ name: 'lang', age: 30 })}>count ++</button>
    </div>
  )
}

export default App;
