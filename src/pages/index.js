import React from 'react';

const Suspensed = (Element) => function suspense(props) {
  return (
    <React.Suspense fallback={<div />}>
      <Element {...props} />
    </React.Suspense>
  );
};

export default {
  Intro: Suspensed(React.lazy(() => import('./Intro'))),
  Error404: Suspensed(React.lazy(() => import('./Error404'))),
  Profile: Suspensed(React.lazy(() => import('./Profile'))),
  Service: Suspensed(React.lazy(() => import('./Service'))),
  Project: Suspensed(React.lazy(() => import('./Project'))),
  Gallery: Suspensed(React.lazy(() => import('./Gallery'))),
  Partner: Suspensed(React.lazy(() => import('./Partner'))),
  Testimoni: Suspensed(React.lazy(() => import('./Testimoni'))),
  Contact: Suspensed(React.lazy(() => import('./Contact'))),
  DetailService: Suspensed(React.lazy(() => import('./DetailService'))),
  Home: Suspensed(React.lazy(() => import('./Home'))),
};
