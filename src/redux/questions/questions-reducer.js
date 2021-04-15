import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddResult,
  actionUpdateResult,
  actionSetNameTest,
  actionResetAnswers,
  actionGetTest,
} from './questions-actions';

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
  [actionResetAnswers]: (state, { payload }) => {
    const resetAnswers = payload;
    return resetAnswers;
  },
});
const setNameReducer = createReducer('', {
  [actionSetNameTest]: (state, { payload }) => {
    return payload;
  },
});
const setDataQuestions = createReducer([], {
  [actionGetTest]: (state, { payload }) => {
    return payload;
  },
});

export default {
  resultQuestionsReducer,
  setNameReducer,
  setDataQuestions,
};
