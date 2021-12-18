import React from 'react';

export const Name = React.memo(({ name }) => {
  console.log('name render');
  return (
    <div>
      <p>{name.text}</p>
    </div>
  );
});

export const Age = React.memo(({ name, age }) => {
  console.log('age render');
  return (
    <div>
      <p>{age}</p>
      <Name name={name} />
    </div>
  );
});
