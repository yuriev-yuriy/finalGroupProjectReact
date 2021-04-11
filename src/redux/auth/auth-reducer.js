import { createReducer } from '@reduxjs/toolkit';
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

const user = createReducer(initialState, {
  [registerUserSuccess]: (_, { payload }) => payload,
  [loginUserSuccess]: (_, { payload }) => payload,
  [fetchCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutUserSuccess]: () => null,
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
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

export default {
  user,
  token,
  isLoggedIn,
  loading,
};

// const isAuthenticated = createReducer(false, {
// [registerUserSuccess]: () => true,
// [loginUserSuccess]: () => true,
// [registerUserError]: () => false,
// [loginUserError]: () => false,
// [logoutUserSuccess]: () => false,
// });
