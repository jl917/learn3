import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.styl';

const Nav = () => (
  <nav className={s.nav}>
    <h3>내비게이션</h3>
    <NavLink to="/">메인</NavLink>
    <NavLink to="/page1">회원가입(폼 with graphql)</NavLink>
    <NavLink to="/page2">현재 회원 리스트</NavLink>
    <NavLink to="/page3">page3</NavLink>
    <NavLink to="/page4">page4</NavLink>
    <NavLink to="/page5">page5</NavLink>
    <NavLink to="/page6">page6</NavLink>
    <NavLink to="/page7">page7</NavLink>
    <NavLink to="/page8">page8</NavLink>
    <NavLink to="/page9">page9</NavLink>
    <NavLink to="/page10">page10</NavLink>
  </nav>
);

export default Nav;
