import {
  patchUpdateUserName,
  patchUpdateUserAvatar,
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
  changeNameUserRequest,
  changeNameUserSuccess,
  changeNameUserError,
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  changeUserAvatarError,
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
    console.log(error.message);
    dispatch(registerUserError(null));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const { data } = await login({ email, password });
    setToken.set(data.accessToken);
    localStorage.setItem('token', data.accessToken);
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

const fetchCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  setToken.set(persistedToken);
  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await getUser();
    // ?
    dispatch(fetchCurrentUserSuccess(data));
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
  }
};
const updateName = userName => async dispatch => {
  dispatch(changeNameUserRequest());

  try {
    const {
      data: { user },
    } = await patchUpdateUserName(userName);
    console.log(user);
    dispatch(changeNameUserSuccess(user));
  } catch (error) {
    dispatch(changeNameUserError(error.message));
  }
};

const updateAvatar = avatar => async dispatch => {
  dispatch(changeUserAvatarRequest());
  const {
    data: { avatarUrl },
  } = await patchUpdateUserAvatar(avatar);
  try {
  } catch (error) {
    dispatch(changeUserAvatarError(error.message));
  } finally {
    await dispatch(changeUserAvatarSuccess(avatarUrl));
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateName,
  updateAvatar,
};

export default authOperations;
