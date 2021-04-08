import { getQuestions } from '../../../redux/questions/questions-selectors';
import questionsOperations from '../../../redux/questions/questions-operations';
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect } from 'react';
import s from './QuestionCard.module.css';

const QuestionsCard = () => {
  const questions = useSelector(getQuestions);
  const dispatch = useDispatch();

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    dispatch(questionsOperations.fetchQuestions())
  }, []);


  return (
    <ul >
      {questions.map(({ questionId, question, answers }) => (
        <li key={questionId } >
          <h2 className={s.testPage__questionName}> { question } </h2>
            {answers}
        </li>
      ))}
    </ul>
  );
}

export default QuestionsCard;