import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import resultQuestionsReducer from './questions/questions-reducer.js';
import reducerLC from './LC/LC-Reducer';

const contactPersistConfig = {
  key: 'token',
  storage: storage,
};
export const rootReducer = combineReducers({
  answers: resultQuestionsReducer,
  localSt: persistReducer(contactPersistConfig, reducerLC),
});
