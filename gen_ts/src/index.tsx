import * as React from 'react';
import { render } from 'react-dom';

const App: React.SFC<{}> = () => {
  return <h2>app</h2>;
};

render(<App />, document.getElementById('app') as HTMLElement);
