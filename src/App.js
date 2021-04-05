import React from 'react';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Logo from './components/Logo/index';
import Header from './components/Header';

import AuthView from './views/AuthView';

import Footer from './components/Footer';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainView"*/),
);

const UseFulInfoView = lazy(() =>
  import('./views/UseFulInfoView' /*webpackChunkName: "UseFulInfoView"*/),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "ContactsView"*/),
);

const Results = lazy(() =>
  import('./components/Results' /*webpackChunkName: "Results"*/),
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={'Loading'}>
        <Logo to={routes.MAIN_VIEW} />
        <Header to={routes.MAIN_VIEW} />
        <Switch>
          <Route path={routes.USEFUL_INFO_VIEW} component={UseFulInfoView} />
          <Route path={routes.CONTACTS_VIEW} component={ContactsView} />
          <Route path="/auth" component={AuthView} />
          <Route path={routes.RESULT_VIEW} component={Results} />
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
