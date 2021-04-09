import BtnFinishTest from './BtnFinishTest/BtnFinishTest';
import BtnPrevNext from './BtnPrevNext/BtnPrevNext';
import QuestionsCard from './QuestionsCard/QuestionsCard';
import {
  actionAddResult,
  actionUpdateResult,
} from '../../redux/questions/questions-actions';
import { useSelector, useDispatch } from 'react-redux';

import s from './TestPage.module.css';
import { useState, useEffect } from 'react';
import { technical } from './db.json';

const TestPage = () => {
  const dispatch = useDispatch();
  const [userAnswers, setUserAnswers] = useState([]);
  const { answers } = useSelector(state => state);
  // const [nameTest, setNameTest] = useState(null);
  // const [resultTest, setResultTest] = useState(null);

  const [data, setData] = useState(null);
  const [i, setI] = useState(null);
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(true);

  useEffect(() => {
    setData(technical.splice(0, 12));
    setI(0);
  }, []);

  let indexAnswer = 0;

  const handleTestList = e => {
    const {
      target: { dataset },
    } = e;
    console.log(answers);
    const check = answers.some(el => el.answer !== undefined);
    const questionId = data[i].questionId;
    indexAnswer = dataset.index;
    const newAnswer = {
      answerId: dataset.indexAnswer,
      answer: dataset.answer,
      index: dataset.index,
    };

    if (!check) {
      dispatch(actionAddResult(newAnswer));
    }

    if (check) {
      answers.find(el => {
        if (el.index === indexAnswer) {
          return newAnswer;
        } else if (el.answerId === questionId) {
          return newAnswer;
        }
      });
      dispatch(actionUpdateResult(newAnswer));
    }
  };

  const handleNextPrevClick = e => {
    const {
      currentTarget: { dataset },
    } = e;
    const flag = dataset.flag;
    console.log(activePrev, `activePrev`);
    console.log(activeNext, `activeNext`);
    if (flag === 'next') {
      if (i > 10) {
        return setActiveNext(false);
      }
      setI(() => i + 1);
      setActiveNext(true);
      setActivePrev(true);
      return;
    }

    if (flag === 'prev') {
      if (i === 0) {
        return setActivePrev(false);
      }
      setActivePrev(true);
      return setI(() => i - 1);
    }
  };

  return (
    <section className={s.testPage}>
      <div className={s.container}>
        {data && data.length === 12 ? (
          <QuestionsCard
            counter={i}
            handelSet={handleTestList}
            apiData={data}
          />
        ) : (
          <div>Error</div>
        )}
        <BtnPrevNext
          prev={activePrev}
          next={activeNext}
          handleClick={handleNextPrevClick}
          disabled
        />
        {/* <div className={s.testPage__header}>
          <h2 className={s.testPage__testName}>
            <span className={s.testPage__testNameText}> [ Testing </span> theory_ ]
          </h2>
          <BtnFinishTest />
        </div>
        <div className={s.testPage__questions}>
          <div className={s.testPage__questionsNumber}>
            <h3 className={s.testPage__questionsNumberTitle}>Question</h3>
             <Value value={value} />
            <span className={s.testPage__totalAnswers}> / 12 </span>
          </div>
          <QuestionsCard />
        </div>
        <BtnPrevNext
          nextQuestion={() => dispatch(questionsActions.increment(step))}
          prevQuestion={() => dispatch(questionsActions.decrement(step))}/> */}
      </div>
    </section>
  );
};
export default TestPage;
