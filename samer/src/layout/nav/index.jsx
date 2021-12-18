import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.styl';
import n from '../../nav';

const Nav = () => (
  <nav className={s.nav}>
    <h3>내비게이션</h3>
    <NavLink to="/">메인</NavLink>
    {n.map((e) => (
      <p key={e}>
        <NavLink to={`/page${e}`}>
          page
          {e}
        </NavLink>
      </p>
    ))}
  </nav>
);

export default Nav;
