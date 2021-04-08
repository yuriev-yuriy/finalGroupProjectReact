import axios from 'axios';
import {
  fetchQuestionsRequest,
  fetchQuestionsSuccess,
  fetchQuestionsError,
  addAnswersRequest,
  addAnswersSuccess,
  addAnswersError,
} from './questions-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchQuestions = () => async dispatch => {
  dispatch(fetchQuestionsRequest());

  try {
    const { data } = await axios.get('/technical')
      dispatch(fetchQuestionsSuccess(data))
  } catch (error) {
    dispatch(fetchQuestionsError(error))
  }
}

export default {
  fetchQuestions,
}