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
  // const handleChangeEmail = event => {
  //   setEmail(event.target.value);
  // }

  // const handleChangePass = event => {
  //   setPassword(event.target.value);
  // }
  console.log(email);
  console.log(password);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const makeSubmit = event => {
    event.preventDefault();
    // if (event.target.name === email) {
    //   console.log("Boo");
    //   console.log(event.target);
    //    dispatch(authOperations.login({ email, password }));
    //  setEmail('');
    // setPassword('');

    // }

    dispatch(authOperations.register({ email, password }));
    setEmail('');
    setPassword('');
    console.log(email);
    console.log(password);
  };
  return (
    <div className={s.forma}>
      <p className={s.para}>
        Для авторизации можете использовать Google Account:
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
      <form className={s.innerForm} onSubmit={makeSubmit}>
        <label>
          <input
            className={s.input}
            name="email"
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
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
        <div className={s.btnWrapperBottom}>
          {/* <button
          className={s.regBtn}
          name="email"
           >
            Sign In
          </button> */}
          <button type="submit" name="password" className={s.regBtn}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
