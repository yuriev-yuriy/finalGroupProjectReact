import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  increment,
  decrement,
  fetchQuestionsSuccess,
} from './questions-actions';

const valueReducer = createReducer(1, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const stepReducer = (state = 1) => state;

const items = createReducer([], {
  [fetchQuestionsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
  items,
});
