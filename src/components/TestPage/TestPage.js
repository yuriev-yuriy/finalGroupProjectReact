import BtnFinishTest from './BtnFinishTest/BtnFinishTest';
import BtnPrevNext from './BtnPrevNext/BtnPrevNext';
import QuestionsCard from './QuestionsCard/QuestionsCard';
import {
  actionAddResult,
  actionUpdateResult,
} from '../../redux/questions/questions-actions';
import { getQuestions } from '../../data/apiQueries';
import { useSelector, useDispatch } from 'react-redux';
import s from './TestPage.module.css';
import { useState, useEffect } from 'react';

const TestPage = () => {
  const dispatch = useDispatch();
  const { answers, nameTest } = useSelector(state => state);
  const [data, setData] = useState(null);
  const [i, setI] = useState(null);
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(true);

  useEffect(() => {
    // setData(questions);
    setI(0);
  }, []);
  useEffect(() => {
    async function getAnswers() {
      try {
        const { data } = await getQuestions(nameTest);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    getAnswers();
  }, []);
  // useEffect(() => {
  //   dispatch(asyncActionGetTest(nameTest));
  // }, [nameTest, dispatch]);

  let indexAnswer = 0;

  const handleTestList = e => {
    const {
      target: { dataset },
    } = e;
    const check = answers.some(el => el.answer !== undefined);
    const questionId = data[i].questionId;
    indexAnswer = dataset.index;
    const newAnswer = {
      answerId: Number(dataset.indexAnswer),
      answer: dataset.answer,
      in: dataset.index,
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

  return (
    data !== null &&
    data.length === 12 && (
      <section className={s.testPage}>
        <div className={s.container}>
          <div className={s.testPage__header}>
            <h2 className={s.testPage__testName}>
              {nameTest === 'QA technical training' ? (
                <span className={s.testPage__testNameText}>
                  {' '}
                  QA technical training{' '}
                </span>
              ) : (
                <span className={s.testPage__testNameText}>
                  {' '}
                  [ Testing <br />
                  theory_ ]{' '}
                </span>
              )}
            </h2>
            <BtnFinishTest />
          </div>
          <div className={s.testPage__questions}>
            <h3 className={s.testPage__questionsNumber}>
              Question
              <span className={s.testPage__currentQuestionNum}>
                &#160; {i + 1}&#160;
              </span>
              / 12
            </h3>

            {data && data.length === 12 ? (
              <QuestionsCard
                counter={i}
                handleSet={handleTestList}
                apiData={data}
              />
            ) : (
              <div>Error</div>
            )}
          </div>
          <BtnPrevNext
            prev={activePrev}
            next={activeNext}
            handleClick={handleNextPrevClick}
          />
          {/* <h1>{data && data.length === 12 && data[i].question}</h1>
          <QuestionsCard
            counter={i}
            handelSet={handleTestList}
            apiData={data}
          />
          <BtnPrevNext
            prev={activePrev}
            next={activeNext}
            handleClick={handleNextPrevClick}
          />
          {answers && answers.length > 3 && <BtnFinishTest />} */}
        </div>
      </section>
    )
  );
};
export default TestPage;
