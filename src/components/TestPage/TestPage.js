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
  const [prevAnswer, setPrevAnswer] = useState({});
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(true);

  useEffect(() => {
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

  const handleTestList = e => {
    const {
      target: { dataset, id, nodeName },
    } = e;
    if (nodeName !== 'LI') return;

    const check = answers.some(el => el.answer !== undefined);
    const newAnswer = {
      answerId: Number(dataset.indexAnswer),
      answer: dataset.answer,
      in: dataset.index,
    };
    const allLi = document.getElementsByName('check');
    allLi.forEach(item => {
      item.classList.remove(s.item__checked);
    });
    const currentLi = document.getElementById(id);
    currentLi.classList.add(s.item__checked);
    if (!check) {
      dispatch(actionAddResult(newAnswer));
      setPrevAnswer(() => newAnswer);
      return;
    }
    if (check) {
      setPrevAnswer(() => newAnswer);
      dispatch(actionUpdateResult(newAnswer));
      return;
    }
  };

  const handleNextPrevClick = e => {
    const {
      currentTarget: {
        dataset: { flag },
      },
    } = e;
    const allLi = document.getElementsByName('check');
    if (flag === 'next' && answers.length - 1 === i) {
      allLi.forEach(item => {
        item.classList.remove(s.item__checked);
      });
      if (i > 10) {
        return setActiveNext(false);
      }
      setI(() => i + 1);
      setActiveNext(true);
      setActivePrev(true);
      return;
    }

    if (flag === 'prev') {
      allLi.forEach(item => {
        item.classList.remove(s.item__checked);
      });
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
          <div className={s.container__head}>
            <p className={s.container__head__title}>
              <span className={s.container__head__span}> [ Testing</span>
              theory.. ]
            </p>
            <BtnFinishTest />
          </div>

          <h2>{data[i].question}</h2>

          <QuestionsCard
            counter={i}
            handelSet={handleTestList}
            apiData={data}
            currentAnswer={answers}
          />
          <BtnPrevNext
            prev={activePrev}
            next={activeNext}
            handleClick={handleNextPrevClick}
          />
        </div>
      </section>
    )
  );
};
export default TestPage;
