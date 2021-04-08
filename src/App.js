import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import routes from './routes';

// import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/';

import AuthView from './views/AuthView/';

import Footer from './components/Footer/';
import { authOperations } from './redux/auth/';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={'Loading'}>
        <Switch>
          {/* <Route path={routes.USEFUL_INFO_VIEW} component={UseFulInfoView} /> */}
          <PrivateRoute path={routes.USEFUL_INFO_VIEW}>
            <UseFulInfoView />
          </PrivateRoute>
          {/* <Route path={routes.CONTACTS_VIEW} component={ContactsView} /> */}
          <PublicRoute path={routes.CONTACTS_VIEW}>
            <ContactsView />
          </PublicRoute>
          {/* <Route path={routes.AUTH_VIEW} component={AuthView} /> */}
          <PublicRoute path={routes.AUTH_VIEW} restricted>
            <AuthView />
          </PublicRoute>
          {/* <Route path={routes.RESULT_VIEW} component={Results} /> */}
          <PrivateRoute path={routes.RESULT_VIEW}>
            <Results />
            </PrivateRoute>
          {/* <Route path={routes.MAIN_VIEW} component={MainView} /> */}
          <PrivateRoute path={routes.MAIN_VIEW}>
            <MainView />
            </PrivateRoute>
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
