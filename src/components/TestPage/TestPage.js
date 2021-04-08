import BtnFinishTest from './BtnFinishTest/BtnFinishTest';
import BtnPrevNext from "./BtnPrevNext/BtnPrevNext";
import QuestionsCard from "./QuestionsCard/QuestionsCard";
import { useSelector, useDispatch } from 'react-redux';
import { getValue, getStep } from '../../redux/questions/questions-selectors';
import Value from './Value/Value';
import * as questionsActions from '../../redux/questions/questions-actions'
import s from './TestPage.module.css';

const TestPage = () => {
  let value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <section className={s.testPage}>
      <div className={s.container}>
        <div className={s.testPage__header}>
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
          prevQuestion={() => dispatch(questionsActions.decrement(step))}/>
      </div>
    </section>
  )
};

export default TestPage;