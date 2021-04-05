import React from 'react';
import routes from './routes';

import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/';

import AuthView from './views/AuthView/';

import Footer from './components/Footer/';

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
      <Suspense fallback={'Loading'}>
        <Header />
        <Switch>
          <Route path={routes.USEFUL_INFO_VIEW} component={UseFulInfoView} />
          <Route path={routes.CONTACTS_VIEW} component={ContactsView} />
          <Route path={routes.AUTH_VIEW} component={AuthView} />
          <Route path={routes.RESULT_VIEW} component={Results} />
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
