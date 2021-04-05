import React from 'react';
// import MainPage from './components/MainPage';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainView"*/),
);

const UseFulInfoView = lazy(() =>
  import('./views/UseFulInfoView' /*webpackChunkName: "UseFulInfoView"*/),
);

function App() {
  return (
    // <BrowserRouter>
    //   <Route path={'/something'}>
    //     <Switch></Switch>
    //   </Route>
    // </BrowserRouter>

    <BrowserRouter>
      <Suspense fallback={'Loading'}>
        <Switch>
          <Route path={routes.USEFUL_INFO_VIEW} component={UseFulInfoView} />

          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
