import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './AuthForm.module.css';
import gIcon from '../../assets/icons/google-logo.png';
import Modal from '../Modal';
import { authSelectors } from '../../redux/auth';
import { getActiveElement } from 'formik';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  const userCode = useSelector(authSelectors.getCode);
  const formatUserEmail = 'https://' + userEmail;

  console.log(userCode);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    toggleModal();
  }, [toggleModal, userCode]);

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

  const alterSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.login({ email, password }));
    reset();
  };

  const makeSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ email, password }));
    reset();
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
            value={email}
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
            value={password}
          />
        </label>
        <div className={s.btnWrapperBottom}>
          <button className={s.regBtn} onClick={alterSubmit}>
            Sign In
          </button>
          <button data-auth="reg" className={s.regBtn}>
            Sign Up
          </button>
        </div>
      </form>
      {userCode === 201 && (
        <Modal onClose={toggleModal}>
          <p>
            confirm registration on your{' '}
            <a href={formatUserEmail}>{userEmail}</a>
          </p>
        </Modal>
      )}
    </div>
  );
}
