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
  changeNameUserRequest,
  changeNameUserSuccess,
  changeNameUserError,
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  changeUserAvatarError,
} from './auth-actions';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
};

const registration = createReducer(initialState, {
  [registerUserSuccess]: (_, { payload }) => {
    return payload.user;
  },
  [loginUserSuccess]: (state, { payload }) => {
    return payload.user;
  },
  [fetchCurrentUserSuccess]: (_, { payload }) => payload.user,
  [changeNameUserSuccess]: (state, { payload: { name, email } }) => {
    const avatarURL = state.user.avatarURL;
    const user = { user: { name, email, avatarURL } };
    return user;
  },
  [changeUserAvatarSuccess]: (state, { payload }) => {
    const name = state.name;
    const email = state.email;
    const user = { user: { name, email, avatarURL: payload } };
    return user;
  },
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

  [changeNameUserRequest]: () => true,
  [changeNameUserSuccess]: () => false,
  [changeNameUserError]: () => false,

  [changeUserAvatarRequest]: () => true,
  [changeUserAvatarSuccess]: () => false,
  [changeUserAvatarError]: () => false,
});

const authReducer = combineReducers({
  registration,
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
