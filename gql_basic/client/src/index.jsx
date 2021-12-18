import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import Router from './Router';
import client from './graphql/client';
import store from './store';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ApolloProvider>,
  document.getElementById('app'),
);
