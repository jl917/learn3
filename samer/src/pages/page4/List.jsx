import React from 'react';

const List = ({ todo, remove, id }) => (
  <li>
    {console.log('page render')}

    {todo}
    <button type="button" onClick={() => remove(id)}>
      x
    </button>
  </li>
);

export default React.memo(List);
