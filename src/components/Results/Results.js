// import { useSelector, useDispatch } from 'react-redux';
// import { resultOperations, resultSelectors } from '../../redux/results';
import s from './Results.module.css';
import cat176 from '../../assets/images/cat176.png';
import cat120 from '../../assets/images/cat120.png';
import defaultImg from '../../assets/images/cat120default.png';
import ProgressBar from './Chart/Chart.js';

const Results = () => {
  // const dispatch = useDispatch();
  // const rightAnswers = useSelector(resultSelectors.getRightResults);
  // const wrongAnswers = useSelector(resultSelectors.getWrongResults);
  // const totalAnswers = useSelector(resultSelectors.getTotalQuestions);
  //  const results = useSelector(resultSelectors.getResults);

  return (
    <section>
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Results</h2>
        <h3 className={s.sectionSubtitle}>[TESTING THEOSY_]</h3>
        <ProgressBar />
        <div className={s.resultsWrapper}>
          <p className={s.resultData}>Current answers- </p>
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
        <button className={s.sectionButton}>Try again</button>
      </div>
    </section>
  );
};

export default Results;
