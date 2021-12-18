import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import WrapContainer from './layout/WrapContainer';

const Main = WrapContainer('main');

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/page1" component={WrapContainer('page1')} />
      <Route path="/page2" component={WrapContainer('page2')} />
      <Route path="/page3" component={WrapContainer('page3')} />
      <Route path="/page4" component={WrapContainer('page4')} />
      <Route path="/page5" component={WrapContainer('page5')} />
      <Route path="/page6" component={WrapContainer('page6')} />
      <Route path="/page7" component={WrapContainer('page7')} />
      <Route path="/page8" component={WrapContainer('page8')} />
      <Route path="/page9" component={WrapContainer('page9')} />
      <Route path="/page10" component={WrapContainer('page10')} />
    </Switch>
  </BrowserRouter>
);

export default Router;
