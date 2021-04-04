import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './AuthForm.module.css';
import gIcon from '../../assets/icons/google-logo.png';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmitRegistrate = event => {
    event.preventDefault();
    dispatch(authOperations.register({ email, password }));
    reset();
  };

  const handleSubmitLog = event => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    reset();
  };
  return (
    <div className={s.forma}>
      <p className={s.para}>
        Для авторизации можете использовать Googlt Account:
      </p>
      <div className={s.btnWrapper}>
        <button className={s.gBtn} type="submit">
          Google
        </button>
        <img className={s.gLogo} src={gIcon} alt={'gIcon'} />
      </div>
      <p className={s.secondPara}>
        Or login to our app using e-mail and password:
      </p>
      <form className={s.innerForm}>
        <label>
          <input
            className={s.input}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className={s.input}
            type="text"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
        <div className={s.btnWrapperBottom}>
          <button className={s.regBtn} type="submit" onSubmit={handleSubmitLog}>
            Sign In
          </button>
          <button
            className={s.regBtn}
            type="submit"
            onSubmit={handleSubmitRegistrate}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
