import React, { Suspense } from 'react';
import Container from './container';
import Loading from '../components/loading';

const WrapContainer = (page, isPub = false) => {
  const Page = React.lazy(() => import(`../pages/${page}`));
  const Component = () => (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
  return () => {
    if (isPub) {
      return <Component />;
    }
    return (
      <Container>
        <Component />
      </Container>
    );
  };
};

export default WrapContainer;
