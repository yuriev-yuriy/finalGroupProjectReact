import axios from 'axios';
// http://localhost:3030
// https://final-group-project-node.herokuapp.com
axios.defaults.baseURL = 'https://final-group-project-node.herokuapp.com';

const getQuestions = async query => {
  const { data } = await axios.get(
    `/test/${query === 'theoretical' ? 'theory-questions' : 'tech-questions'}`,
  );
  console.log(query);
  return data;
};

const postUserAnswers = async (nameTest, userAnswers) => {
  const dataPost = await { answers: userAnswers, nameTest };
  const { data } = await axios.post(`/test/result`, dataPost);
  return data;
};

const setToken = {
  set(token) {
    console.log(token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = async ({ email, password }) => {
  const { data } = await axios.post('/auth/register', { email, password });
  return data;
};

const login = async ({ email, password }) => {
  const { data } = await axios.post('/auth/login', { email, password });
  return data;
};

const logout = () => {
  return axios.post('auth/logout').then(data => data);
};

const getUser = () => {
  return axios.get('/users/current').then(data => data);
};

export {
  getQuestions,
  postUserAnswers,
  registerUser,
  login,
  logout,
  setToken,
  getUser,
};
