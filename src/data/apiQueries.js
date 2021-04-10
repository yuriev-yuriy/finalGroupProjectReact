import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3030';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjljY2VjMjA2NTU2Mjk3ODY1MDdlYSIsImlhdCI6MTYxODA0Mzc3MiwiZXhwIjoxNjE4MTMwMTcyfQ.YKl48-CwgLsyMVXW1A0iLnH762rsQLQZONcX7yBx7cs';
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

export { getQuestions, postUserAnswers };
