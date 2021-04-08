import { createReducer } from '@reduxjs/toolkit';
import { actionSignInSuccess } from './questions-actions';

const reducerSignInAndOut = createReducer(
  { name: '', token: '' },
  {
    [actionSignInSuccess]: (state, { payload }) => {
      return payload;
    },
  },
);

export default reducerSignInAndOut;
