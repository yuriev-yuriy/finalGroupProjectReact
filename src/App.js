import React from 'react';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import Logo from './components/Logo/index';
import Header from './components/Header';
import AuthView from './views/AuthView'

import Footer from './components/Footer';
import Results from './components/Results';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainPage"*/),
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={'Loading'}>

        <Logo to={routes.MAIN_VIEW} />
       <Header to={routes.MAIN_VIEW} />

        <Switch>
          <Route path="/auth" component={AuthView} />
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
      {/* <Results /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
