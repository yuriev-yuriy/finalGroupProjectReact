import { useHistory, useLocation } from 'react-router-dom';
import s from './Results.module.css';
import cat176 from '../../assets/images/cat176.png';
import cat120 from '../../assets/images/cat120.png';
import defaultImg from '../../assets/images/cat120default.png';
import Diagram from './Chart/Chart.js';
import { postUserAnswers } from '../../data/apiQueries';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const { answers, nameTest } = useSelector(state => state);
  const [dataAnswers, setSetaAnswers] = useState(null);

  useEffect(() => {
    async function getAnswers() {
      try {
        const { data } = await postUserAnswers(nameTest, answers);
        setSetaAnswers(data);
      } catch (error) {
        console.error(error);
      }
    }
    getAnswers();
  }, [nameTest, answers]);

  const history = useHistory();
  const location = useLocation();

  const handleTryAgane = () => {
    console.log(location.state.from);
    // history.push(location.state.from);
  };
  dataAnswers !== null && console.log(dataAnswers.right);
  return (
    <>
      {dataAnswers !== undefined && dataAnswers !== null && (
        <section>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Results</h2>
            <h3 className={s.sectionSubtitle}>[TESTING THEOSY_]</h3>
            <Diagram
              correctAnswers={dataAnswers.right}
              allAnswers={dataAnswers.total}
            />
            <div className={s.resultsWrapper}>
              <p className={s.resultData}>
                Current answers- {dataAnswers.result.right}
              </p>
              <p className={s.resultData}>
                Total questions- {dataAnswers.result.total}
              </p>
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
      )}
    </>
  );
};

export default Results;
