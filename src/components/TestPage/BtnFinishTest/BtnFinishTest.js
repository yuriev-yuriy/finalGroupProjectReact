import { Link } from 'react-router-dom';
import routes from '../../../routes';
import s from './BtnFinishTest.module.css';

const BtnFinishTest = () => {

  return (
    <Link
      to={routes.MAIN_VIEW}
      className={s.testPage__btnFinish}
    >
      Finish test
    </Link>
  );
};

export default BtnFinishTest;
