import AuthForm from '../../components/AuthForm';
import s from './AuthView.module.css';

const AuthView = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <h1 className={s.header}>Pro Test</h1>
        <p className={s.para}>
          <span>[</span> We will help you find weak points in knowledge so that
          you can strengthen it. We will show you what is relevant to know for a{' '}
          <span>QA Engineer</span> and will try to make the learning process
          more diverse_ <span>]</span>
        </p>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthView;
