import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.default.baseURL = 'https://final-group-project-node.herokuapp.com';

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
    const data = await axios.post(
      'https://final-group-project-node.herokuapp.com/auth/login',
      credentials,
    );

    return data;
  } catch (err) {
    throw new err();
  }
});

const operations = {
  register,
  login,
};
export default operations;
