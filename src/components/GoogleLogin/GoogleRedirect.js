import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './GoogleRedirect.module.css';
import { authOperations } from '../../redux/auth';

function GoogleLogin() {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = queryString.parse(location.search);
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    console.log(data, `GoogleLogin`);
    dispatch(authOperations.logInGoogle(data));
  }, [data, dispatch]);

  return (
    isLoggedIn && (
      <div className={s.googl__wrapper}>
        <Route>
          <Redirect to="/" />
        </Route>
      </div>
    )
  );
}
export default GoogleLogin;
