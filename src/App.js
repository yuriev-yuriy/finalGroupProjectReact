import React from 'react';
// import MainPage from './components/MainPage';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainPage"*/),
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
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
