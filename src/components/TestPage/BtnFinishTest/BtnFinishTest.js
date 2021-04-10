import { Link } from 'react-router-dom';
import routes from '../../../routes';
import s from './BtnFinishTest.module.css';
import { useHistory, useLocation } from 'react-router-dom';

const BtnFinishTest = () => {
  const history = useHistory();
  const location = useLocation();

  const handleTryTest = () => {
    // console.log(location.state.from);
    // location.state = '/test'
    // history.push('/test');
  };
  return (
    <Link
      to={routes.RESULT_VIEW}
      className={s.testPage__btnFinish}
      onClick={handleTryTest}
    >
      Finish test
    </Link>
  );
};

export default BtnFinishTest;
