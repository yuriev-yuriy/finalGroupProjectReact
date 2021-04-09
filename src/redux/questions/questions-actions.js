import { createAction } from '@reduxjs/toolkit';
const actionAddResult = createAction('questions/add', newAnswer => ({
  payload: newAnswer,
}));
const actionUpdateResult = createAction('questions/update', newAnswer => ({
  payload: newAnswer,
}));

export { actionAddResult, actionUpdateResult };
