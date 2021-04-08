import { createReducer } from '@reduxjs/toolkit';
import { actionAddResult, actionUpdateResult } from './questions-actions';

const resultQuestionsReducer = createReducer([], {
  [actionAddResult]: (state, { payload }) => {
    const answersAdd = [...state, payload];
    return answersAdd;
  },
  [actionUpdateResult]: (state, { payload }) => {
    const answerRemove = [
      ...state.filter(answer => answer.answerId !== payload.answerId),
      payload,
    ];
    return answerRemove;
  },
});

export default resultQuestionsReducer;
