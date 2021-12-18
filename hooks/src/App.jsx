import React, { useState, useMemo, useEffect } from 'react';
import { useGetUser } from './hooks';

const App = () => {
  const a = useGetUser();
  console.log(a)
  return (
    <div>
    </div>
  )
};

export default App;
