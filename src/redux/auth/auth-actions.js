import { createAction } from '@reduxjs/toolkit';

export const registerUserRequest = createAction('auth/registerUserRequest');
export const registerUserSuccess = createAction('auth/registerUserSuccess');
export const registerUserError = createAction('auth/registerUserError');

export const loginUserRequest = createAction('auth/loginUserRequest');
export const loginUserSuccess = createAction('auth/loginUserSuccess');
export const loginUserError = createAction('auth/loginUserError');

export const logoutUserRequest = createAction('auth/logoutUserRequest');
export const logoutUserSuccess = createAction('auth/logoutUserSuccess');
export const logoutUserError = createAction('auth/logoutUserError');

export const changeNameUserRequest = createAction('auth/updateUserNameRequest');
export const changeNameUserSuccess = createAction('auth/updateUserNameSuccess');
export const changeNameUserError = createAction('auth/updateUserNameError');

export const changeUserAvatarRequest = createAction('auth/changeAvatarRequest');
export const changeUserAvatarSuccess = createAction('auth/changeAvatarSuccess');
export const changeUserAvatarError = createAction('auth/changeAvatarError');

export const fetchCurrentUserRequest = createAction(
  'auth/fetchCurrentUserRequest',
);
export const fetchCurrentUserSuccess = createAction(
  'auth/fetchCurrentUserSuccess',
);
export const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');
