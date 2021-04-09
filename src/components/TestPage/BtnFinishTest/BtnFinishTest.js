import { Link } from 'react-router-dom';
import routes from '../../../routes';
import s from './BtnFinishTest.module.css';

const BtnFinishTest = ({ onClick }) => {
  return (
    <Link
      to={routes.MAIN_VIEW}
      className={s.testPage__btnFinish}
      onClick={onClick}
    >
      Finish test
    </Link>
  );
};

export default BtnFinishTest;
