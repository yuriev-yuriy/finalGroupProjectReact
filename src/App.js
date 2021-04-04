import React from 'react';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Logo from './components/Logo/index';

import Footer from './components/Footer';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainPage"*/),
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading'}>
        <Logo to={routes.MAIN_VIEW} />
        <Switch>
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
