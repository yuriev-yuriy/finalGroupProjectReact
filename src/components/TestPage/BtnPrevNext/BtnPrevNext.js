import { ReactComponent as Arrow } from '../../../assets/icons/svg/arrow.svg';
import s from './BtnPrevNext.module.css';

const BtnPrevNext = ({ prevQuestion, nextQuestion }) => {
  return (
    <div className={s.testPage__btnPrevNext}>
      <button
        className={s.testPage__btnPrev}
        type="button"
        onClick={prevQuestion}
      >
        <Arrow className={s.arrowLeft} width="25px" alt="arrow" />
        Previous question
      </button>
      <button
        className={s.testPage__btnNext}
        type="button"
        onClick={nextQuestion}
      >
        Next question
        <Arrow className={s.arrowRight} width="25px" alt="arrow" />
      </button>
    </div>
  );
};

export default BtnPrevNext;
