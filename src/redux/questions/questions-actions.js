import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('questions/Increment');
export const decrement = createAction('questions/Decrement');

export const fetchQuestionsRequest = createAction(
  'questions/fetchQuestionsRequest',
);
export const fetchQuestionsSuccess = createAction(
  'questions/fetchQuestionsSuccess',
);
export const fetchQuestionsError = createAction(
  'questions/fetchQuestionsError',
);

export const addAnswersRequest = createAction('questions/addAnswersRequest');
export const addAnswersSuccess = createAction('questions/addAnswersSuccess');
export const addAnswersError = createAction('questions/addAnswersError');
