import { combineReducers } from '@reduxjs/toolkit';
import { questionsReducer } from '../questions';
import { authReducer } from '../auth';

export const rootReducer = combineReducers({
  answers: questionsReducer.resultQuestionsReducer,
  nameTest: questionsReducer.setNameReducer,
  questions: questionsReducer.setDataQuestions,
  auth: authReducer,
});

export default rootReducer;
