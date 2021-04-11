import authOperations from './auth-operations';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  code: null,
};

const authReducer = createReducer(initialState, {
  // [authOperations.register.fulfilled](state, {pay}) {
  //   const =
  //   state.code = action.payload.data.code;
  // },
  [authOperations.login.fulfilled](state, action) {
    console.log(JSON.stringify(action));
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
  [authOperations.fetchCurrentUser.fulfilled](state, action) {
    state.user = action.payload.data.data.user;
    state.isLoggedIn = true;
  },
});

export default authReducer;
