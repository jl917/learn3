import React from 'react';
import Header from '../header';
import Aside from '../aside';
import s from './style.styl';

const Container = ({ children }) => {
  return (
    <div className={s.wrap}>
      <Aside />
      <div className={s.page}>
        <Header />
        <div className={s.contents}>{children}</div>
      </div>
    </div>
  );
};

export default Container;
