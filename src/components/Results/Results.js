import { useHistory, useLocation } from 'react-router-dom';
import s from './Results.module.css';
import cat176 from '../../assets/images/cat176.png';
import cat120 from '../../assets/images/cat120.png';
import defaultImg from '../../assets/images/cat120default.png';
import Diagram from './Chart/Chart.js';
// import { useSelector, useDispatch } from 'react-redux';
// import { getRightAnswers } from '../../redux/results/result-selectors';

const Results = () => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleTryAgane = () => {
    // console.log(location.state.from);
    history.push(location.state.from);
  };

  return (
    <section>
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Results</h2>
        <h3 className={s.sectionSubtitle}>[TESTING THEOSY_]</h3>
        <Diagram />
        <div className={s.resultsWrapper}>
          <p className={s.resultData}>Current answers- 10</p>
          <p className={s.resultData}>Total questions- 12</p>
        </div>
        <picture>
          <source
            srcSet={cat176}
            media="(min-width:768px)"
            alt="cat with a heart"
          />
          <source
            srcSet={cat120}
            media="(min-width:320px)"
            alt="cat with a heart"
          />
          <img src={defaultImg} alt="cat with a heart" />
        </picture>
        <p className={s.testResult}>Not bad!</p>
        <p className={s.testResultDescription}>
          But you still need to learn some materials.
        </p>
        <button
          type="button"
          onClick={handleTryAgane}
          className={s.sectionButton}
        >
          Try again
        </button>
      </div>
    </section>
  );
};

export default Results;
