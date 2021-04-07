import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  code: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
      state.code = action.payload.data.code;
    },
    [authOperations.login.fulfilled](state, action) {
      console.log(JSON.stringify(action))
      state.user = action.payload.data.data.user;
      state.token = action.payload.data.data.token;
      state.isLoggedIn = true;
      state.code = action.payload.data.code;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
