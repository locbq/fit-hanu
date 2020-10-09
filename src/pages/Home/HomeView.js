import React, {
  lazy,
  Suspense,
} from 'react';
import Spinner from 'components/Spinner';

const Carousel = lazy(() => import('./components/Carousel'));
const Highlight = lazy(() => import('./components/Highlight'));
const Content = lazy(() => import('./components/Content'));

function HomeView() {
  return (
    <Suspense fallback={<Spinner />}>
      <Carousel />
      <Highlight />
      <Content />
    </Suspense>
  );
}

export default HomeView;
