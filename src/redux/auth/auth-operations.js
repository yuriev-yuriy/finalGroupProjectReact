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
import { toast } from 'react-toastify';

const register = ({ email, password }) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const {
      data: { avatar },
    } = await registerUser({ email, password });
    const user = { user: { name: null, email, avatarURL: avatar } };
    toast(
      `User ${email} was created , please follow to your email and confirm request`,
    );
    dispatch(registerUserSuccess(user));
  } catch (error) {
    console.log(error.message);
    toast(`Wrong email`);
    dispatch(registerUserError(null));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const { data } = await login({ email, password });
    setToken.set(data.accessToken);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    toast(`Hello dear ${email}`);
    dispatch(loginUserSuccess(data));
  } catch (error) {
    toast(`Wrong credentials`);
    dispatch(loginUserError(error.message));
  }
};

const logInGoogle = ({
  email,
  name,
  picture,
  refreshToken,
  token,
}) => async dispatch => {
  dispatch(loginUserRequest());
  try {
    setToken.set(token);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    const data = { user: { name: name, email, avatarURL: picture } };
    toast(`Hello dear ${name}`);
    dispatch(loginUserSuccess(data));
  } catch (error) {
    dispatch(loginUserError(error.message));
    toast(`Wrong credentials`);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutUserRequest());
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('token');

  try {
    await logout();
    setToken.unset();
    toast(`Goodbye dear user`);
    dispatch(logoutUserSuccess());
  } catch (error) {
    toast(`Ups Something wrong:)`);
    dispatch(logoutUserError(error.message));
  }
};

const fetchCurrentUser = token => async dispatch => {
  setToken.set(token);
  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await getUser();
    dispatch(fetchCurrentUserSuccess(data));
    toast(`Welcome current user`);
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
    toast(`Please execute login`);
  }
};
const updateName = userName => async dispatch => {
  dispatch(changeNameUserRequest());

  try {
    const {
      data: { user },
    } = await patchUpdateUserName(userName);
    toast(`Name was updated`);
    dispatch(changeNameUserSuccess(user));
  } catch (error) {
    dispatch(changeNameUserError(error.message));
    toast(`Wrong input symbols `);
  }
};

const updateAvatar = avatar => async dispatch => {
  dispatch(changeUserAvatarRequest());
  const {
    data: { avatarUrl },
  } = await patchUpdateUserAvatar(avatar);
  toast(`Wait we are uploading `);
  try {
  } catch (error) {
    dispatch(changeUserAvatarError(error.message));
    toast(`Photo must be less than 2000KB`);
  } finally {
    await dispatch(changeUserAvatarSuccess(avatarUrl));
    toast(`Avatar was updated`);
  }
};

const authOperations = {
  register,
  logIn,
  logInGoogle,
  logOut,
  fetchCurrentUser,
  updateName,
  updateAvatar,
};

export default authOperations;
