import { ReactComponent as Arrow } from '../../../assets/icons/svg/arrow.svg';
import s from './BtnPrevNext.module.css';

const BtnPrevNext = ({ handleClick, prev, next }) => {
  return (
    <div className={s.testPage__btnPrevNext}>
      <button
        onClick={handleClick}
        className={prev ? s.testPage__btnPrev : s.disactive}
        type="button"
        data-flag="prev"
      >
        <Arrow className={s.arrowLeft} width="25px" alt="arrow" />
        Previous question
      </button>
      <button
        onClick={handleClick}
        className={next ? s.testPage__btnNext : s.disactive}
        type="button"
        data-flag="next"
      >
        Next question
        <Arrow className={s.arrowRight} width="25px" alt="arrow" />
      </button>
    </div>
  );
};

export default BtnPrevNext;
