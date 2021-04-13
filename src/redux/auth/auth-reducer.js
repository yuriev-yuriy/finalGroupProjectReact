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
  data: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
};

const registration = createReducer(initialState, {
  [registerUserSuccess]: (_, { payload }) => {
    return payload;
  },
  [loginUserSuccess]: (state, { payload }) => {
    return payload.user;
  },
  [logoutUserSuccess]: () => null,
  [fetchCurrentUserSuccess]: (_, { payload }) =>  {
     return { user: payload.data.user,
    token : payload.data.token,}
    
},
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => {
    return payload.token;
  },
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
