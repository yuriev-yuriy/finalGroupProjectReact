import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseURL = 'https://final-group-project-react.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const data = await axios.post('users/signup', credentials);

        return data;
    } catch (err) {
        throw new err;
    }
})

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const data = await axios.post('users/login', credentials);

        return data;
    } catch (err) {
        throw new err;
    }
})

const operations = {
  register,
  login,
};
export default operations;