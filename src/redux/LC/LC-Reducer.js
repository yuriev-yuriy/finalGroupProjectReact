import { createReducer } from '@reduxjs/toolkit';
import { actionCreateLc } from './LC-actions';

const reducerLC = createReducer(
  { name: '', token: '', email: '' },
  {
    [actionCreateLc]: (state, { payload }) => {
      return payload;
    },
  },
);

export default reducerLC;
