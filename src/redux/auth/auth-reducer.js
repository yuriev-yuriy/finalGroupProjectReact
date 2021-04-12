import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from './auth-actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

//  name: null,

const registration = createReducer(
  {
    user: { email: null },
    token: null,
    isLoggedIn: false,
  },
  {
    [registerUserSuccess]: (_, { payload }) => payload.registration.user.email,
    [loginUserSuccess]: (_, { payload }) => payload.registration.user.email,
    [fetchCurrentUserSuccess]: (_, { payload }) => payload.auth,
    [logoutUserSuccess]: () => null,
  },
);

const token = createReducer(null, {
  // [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [fetchCurrentUserError]: () => null,
  [logoutUserSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [loginUserSuccess]: () => true,
  [fetchCurrentUserSuccess]: () => true,
  [fetchCurrentUserRequest]: () => true,

  [loginUserError]: () => false,
  [logoutUserSuccess]: () => false,
  [fetchCurrentUserError]: () => false,
});

const loading = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,

  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,

  [logoutUserRequest]: () => true,
  [logoutUserSuccess]: () => false,
  [logoutUserError]: () => false,

  [fetchCurrentUserRequest]: () => true,
  [fetchCurrentUserSuccess]: () => false,
  [fetchCurrentUserError]: () => false,
});

const authReducer = combineReducers({
  registration,
  token,
  isLoggedIn,
  loading,
});

export default authReducer;
// const isAuthenticated = createReducer(false, {
// [registerUserSuccess]: () => true,
// [loginUserSuccess]: () => true,
// [registerUserError]: () => false,
// [loginUserError]: () => false,
// [logoutUserSuccess]: () => false,
// });
