import { createReducer } from '@reduxjs/toolkit';
import {
  actionAddResult,
  actionUpdateResult,
  actionSetNameTest,
  actionGetTest,
  actionPostTest,
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
const setQuestionsResult = createReducer([], {
  [actionPostTest]: (state, { payload }) => {
    console.log(payload, `payload setQuestionsResult`);
    return payload;
  },
});

export default {
  resultQuestionsReducer,
  setNameReducer,
  setDataQuestions,
  setQuestionsResult,
};
