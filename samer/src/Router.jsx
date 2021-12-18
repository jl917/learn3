import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import WrapContainer from './layout/WrapContainer';
import n from './nav';

const Main = WrapContainer('main');

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      {n.map((e) => (
        <Route key={e} path={`/page${e}`} component={WrapContainer(`page${e}`)} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
