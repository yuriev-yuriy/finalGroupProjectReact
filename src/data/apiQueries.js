import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3030';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjljY2VjMjA2NTU2Mjk3ODY1MDdlYSIsImlhdCI6MTYxNzk4Mjc1MCwiZXhwIjoxNjE4MDY5MTUwfQ._DB3IKSwuRzMBFBkdiVDSYhaTpS_pevVGIcXNEmzRiY';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const getQuestions = async query => {
  const { data } = await axios.get(
    `/test/${query === 'theoretical' ? 'theory-questions' : 'tech-questions'}`,
  );
  console.log(query, `query`);
  return data;
};
const postUserAnswers = async (name, userAnswer) => {
  const dataPost = { answers: userAnswer, nameTest: name };
  const { data } = await axios.post(`/test/result`, dataPost);
  return data;
};

export { getQuestions, postUserAnswers };
