import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await axios.post('/auth/register', credentials);
    token.set(data.token);
    return data;
  } catch (err) {
    throw new Error();
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await axios.post('/auth/login', credentials);
    return data;
  } catch (err) {
    throw new err();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await axios.get('/users/current');
      return data;
    } catch (err) {}
  },
);

const operations = {
  register,
  login,
  logOut,
  fetchCurrentUser,
};
export default operations;
