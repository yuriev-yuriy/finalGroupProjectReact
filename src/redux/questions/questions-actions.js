import { createAction } from '@reduxjs/toolkit';
const actionAddResult = createAction('questions/add', newAnswer => ({
  payload: newAnswer,
}));
const actionUpdateResult = createAction('questions/update', newAnswer => ({
  payload: newAnswer,
}));
const actionSetNameTest = createAction('questions/setName', newAnswer => ({
  payload: newAnswer,
}));

const actionGetTest = createAction('data/getTest', value => ({
  payload: value,
}));
const actionPostTest = createAction('data/postName', value => ({
  payload: value,
}));

export {
  actionAddResult,
  actionUpdateResult,
  actionSetNameTest,
  actionGetTest,
  actionPostTest,
};
