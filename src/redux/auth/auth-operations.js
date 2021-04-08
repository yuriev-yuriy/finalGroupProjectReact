import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-group-project-node.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await axios.post('/auth/register', credentials);

    return data;
  } catch (err) {
    throw new err();
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await axios.post('/auth/login', credentials);
    console.log(data)
    console.log(data.data.data)
    console.log(data.data.data.user)
    return data;
  } catch (err) {
    throw new err();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
  } catch (error) {}
});

const operations = {
  register,
  login,
  logOut,
};
export default operations;
