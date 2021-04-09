import BtnFinishTest from './BtnFinishTest/BtnFinishTest';
import BtnPrevNext from './BtnPrevNext/BtnPrevNext';
import QuestionsCard from './QuestionsCard/QuestionsCard';
import {
  actionAddResult,
  actionUpdateResult,
} from '../../redux/questions/questions-actions';
import {
  asyncActionGetTest,
  asyncActionPostTest,
} from '../../redux/questions/questions-operation.js';
import { useSelector, useDispatch } from 'react-redux';
import s from './TestPage.module.css';
import { useState, useEffect } from 'react';

const TestPage = () => {
  const dispatch = useDispatch();
  const { answers, nameTest, questions } = useSelector(state => state);

  const [data, setData] = useState(null);
  const [i, setI] = useState(null);
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(true);

  useEffect(() => {
    setData(questions);
    setI(0);
  }, [questions]);

  useEffect(() => {
    dispatch(asyncActionGetTest(nameTest));
  }, [nameTest, dispatch]);

  let indexAnswer = 0;

  const handleTestList = e => {
    const {
      target: { dataset },
    } = e;
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
  const handlePostAnswer = async e => {
    await dispatch(asyncActionPostTest(nameTest, answers));
  };

  return (
    <section className={s.testPage}>
      <div className={s.container}>
        <h1>{data && data.length === 12 && data[i].question}</h1>
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
        />
        {answers && answers.length > 3 && (
          <BtnFinishTest onClick={handlePostAnswer} />
        )}
        {/* <div className={s.testPage__header}>
          <h2 className={s.testPage__testName}>
            <span className={s.testPage__testNameText}> [ Testing </span> theory_ ]
          </h2>
          
        </div>
        <div className={s.testPage__questions}>
          <div className={s.testPage__questionsNumber}>
            <h3 className={s.testPage__questionsNumberTitle}>Question</h3>
             <Value value={value} />
            <span className={s.testPage__totalAnswers}> / 12 </span>
          </div>
          <QuestionsCard />
        </div>
 */}
      </div>
    </section>
  );
};
export default TestPage;
