import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import store from './store';
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 5000
  //   }
  // }
})

render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById('app'),
);
