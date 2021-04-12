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

const register = ({ email, password }) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const {
      data: { avatar },
    } = await registerUser({ email, password });
    const user = { user: { name: null, email, avatarURL: avatar } };
    dispatch(registerUserSuccess(user));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const { data } = await login({ email, password });
    setToken.set(data.token);
    localStorage.setItem('token', data.token);
    dispatch(loginUserSuccess(data));
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

const fetchCurrentUser = (token) => async (dispatch) => {
  setToken.set(token);
  // const {
  //   auth: { token: persistedToken },
  // } = getState();
  // if (!persistedToken) return;
  // setToken.set(persistedToken);
  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await getUser();
    console.log(`DAAAATTTAAA! ${data}`)
    dispatch(fetchCurrentUserSuccess(data));
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
