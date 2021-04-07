import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-group-project-node.herokuapp.com';

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
    console.log(data)
    token.set(data.token);
    return data;
  } catch (err) {
    throw new err();
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await axios.post('/auth/login', credentials);
    token.set(data.token);
    console.log(data)
    
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

const operations = {
  register,
  login,
  logOut,
};
export default operations;
