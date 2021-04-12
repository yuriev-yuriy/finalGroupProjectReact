import axios from 'axios';
axios.defaults.baseURL = 'https://final-group-project-node.herokuapp.com';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjljY2VjMjA2NTU2Mjk3ODY1MDdlYSIsImlhdCI6MTYxODE1ODI3MSwiZXhwIjoxNjE4MjQ0NjcxfQ.pB9ZtDde7msw8770GdXrVkym8D1L_taVa6mclPetBRk';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = ({ name, email, password }) => {
  return axios
    .post('/auth/register', { name, email, password })
    .then(data => data);
};

const login = ({ email, password }) => {
  return axios.post('/auth/login', { email, password }).then(data => data);
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
