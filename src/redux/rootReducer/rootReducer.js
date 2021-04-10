import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { questionsReducer } from '../questions';
import { LcSetReducer } from '../LC/index';
import { authReducer } from '../auth';

const contactPersistConfig = {
  key: 'token',
  storage: storage,
};

export const rootReducer = combineReducers({
  auth: authReducer,
  answers: questionsReducer.resultQuestionsReducer,
  nameTest: questionsReducer.setNameReducer,
  questions: questionsReducer.setDataQuestions,
  result: questionsReducer.setQuestionsResult,
  localSt: persistReducer(contactPersistConfig, LcSetReducer),
});

export default rootReducer;
