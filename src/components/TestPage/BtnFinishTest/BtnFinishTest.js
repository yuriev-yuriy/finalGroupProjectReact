import { Link } from 'react-router-dom';
import routes from '../../../routes';
import s from './BtnFinishTest.module.css';

const BtnFinishTest = ({ checkData }) => {
  const handleTryTest = e => {
    console.log(`go to result view`);
  };
  console.log(checkData);
  return checkData ? (
    <div>
      <Link
        className={s.testPage__btnFinish}
        to={routes.RESULT_VIEW}
        onClick={handleTryTest}
      >
        Finish test
      </Link>
    </div>
  ) : (
    <div className={s.testPage__btnFinish__disactive}>Finish test</div>
  );
};

export default BtnFinishTest;
