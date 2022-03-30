import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Basic from '@/pages/Basic';

const BT = () => {
  const onRow = (record: any) => {
    return {
      onClick: (event: any) => {
        console.log('bt components')
      }
    }
  } 
  return <Basic onRow={onRow} />
}

const Router: React.FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <ul>
      <li><Link to="/">basic</Link></li>
    </ul>
    <Routes>
      <Route path="/">
        <Route index element={<BT />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Router;