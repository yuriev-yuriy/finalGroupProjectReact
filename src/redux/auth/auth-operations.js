// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'http://localhost:3030';
import {
  registerUser,
  login,
  logout,
  setToken,
  getUser,
} from '../../data/apiQueries.js';

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

const register = ({ name, email, password }) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    await registerUser({ name, email, password });
    dispatch(registerUserSuccess());
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const { data } = await login({ email, password });
    const { name, token } = data.result;
    setToken.set(token);
    dispatch(loginUserSuccess({ name, token }));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutUserRequest());

  try {
    await logout();
    setToken.unset();
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUserError(error.message));
  }
};

const fetchCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  setToken.set(persistedToken);
  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await getUser();
    const { result } = data;
    dispatch(fetchCurrentUserSuccess(result.name));
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
