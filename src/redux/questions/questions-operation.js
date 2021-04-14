import {
  actionGetTest,
  actionPostTest,
  actionResetAnswers,
} from './questions-actions.js';
import { getQuestions, postUserAnswers } from '../../data/apiQueries.js';

const asyncActionGetTest = query => async dispatch => {
  try {
    const { data } = await getQuestions(query);
    dispatch(actionGetTest(data));
  } catch (error) {
    console.log(error);
  }
};
const asyncActionPostTest = (name, userAnswer) => async dispatch => {
  try {
    const { data } = await postUserAnswers(name, userAnswer);
    dispatch(actionPostTest([data]));
  } catch (error) {
    console.log(error);
  }
};
const asyncActionResetAnswers = newAnswer => dispatch => {
  dispatch(actionResetAnswers(newAnswer));
};
export { asyncActionGetTest, asyncActionPostTest, asyncActionResetAnswers };
