import s from './Results.module.css';
import cat176 from '../../assets/images/cat176.png';
import cat120 from '../../assets/images/cat120.png';
import defaultImg from '../../assets/images/cat120default.png';

const Results = () => {
  return (
    <section>
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Results</h2>
        <h3 className={s.sectionSubtitle}>[TESTING THEOSY_]</h3>
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
