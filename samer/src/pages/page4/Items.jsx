import React from 'react';
import List from './List';

const Items = ({ itodoList, remove }) => (
  <ul>
    {console.log('render items')}
    {itodoList.map((e) => (
      <List todo={e.todo} key={e.id} remove={remove} />
    ))}
  </ul>
)

export default Items;
