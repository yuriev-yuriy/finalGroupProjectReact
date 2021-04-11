import { createAction } from '@reduxjs/toolkit';

const actionCreateLc = createAction('signIn/success', value => ({
  payload: value,
}));

export { actionCreateLc };
