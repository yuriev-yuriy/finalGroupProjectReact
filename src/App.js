import React from 'react';
// import MainPage from './components/MainPage';
import routes from './routes';

import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const MainView = lazy(() =>
  import('./views/MainView' /*webpackChunkName: "MainView"*/),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "ContactsView"*/),
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
          <Route path={routes.CONTACTS_VIEW} component={ContactsView} />
          <Route path={routes.MAIN_VIEW} component={MainView} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
