import React, { lazy, Suspense } from 'react';
import routes from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/';

import Loader from './components/Loader';
import GoogleLogin from './components/GoogleLogin';
import Footer from './components/Footer/';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import s from './App.module.css';
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
const TestPage = lazy(() =>
  import('./components/TestPage' /*webpackChunkName: "TestPage"*/),
);

const AuthView = lazy(() =>
  import('./views/AuthView' /*webpackChunkName: "AuthView"*/),
);

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <main className={s.content}>
              <Route exact path={routes.GOOGLE_LOGIN}>
                <GoogleLogin>
                  <Loader />
                </GoogleLogin>
              </Route>
              <PrivateRoute exact path={routes.USEFUL_INFO_VIEW}>
                <UseFulInfoView />
              </PrivateRoute>
              <PublicRoute exact path={routes.CONTACTS_VIEW}>
                <ContactsView />
              </PublicRoute>
              <PublicRoute exact path={routes.AUTH_VIEW} restricted>
                <AuthView />
              </PublicRoute>
              <PrivateRoute exact path={routes.RESULT_VIEW}>
                <Results />
              </PrivateRoute>
              <PrivateRoute exact path={routes.MAIN_VIEW}>
                <MainView />
              </PrivateRoute>
              <PrivateRoute exact path={routes.TEST_VIEW}>
                <TestPage />
              </PrivateRoute>
            </main>
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
