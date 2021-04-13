import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './AuthForm.module.css';
import gIcon from '../../assets/icons/google-logo.png';
import Modal from '../Modal';
import { authSelectors } from '../../redux/auth';
import { getActiveElement } from 'formik';
import ModalContent from '../ModalContent';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const userEmail = useSelector(authSelectors.getUserEmail);
  const userCode = useSelector(authSelectors.getCode);
  const formatUserEmail = 'https://' + userEmail;

  const toggleModal = () => setShowModal(state => !state);

  useEffect(() => {
    if (userCode === 201) {
      toggleModal();
    }
    return;
  }, [userCode]);

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

  const handleSignIn = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const handleSignUp = event => {
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
        <a href="https://final-group-project-node.herokuapp.com/auth/google"><button className={s.gBtn} type="submit">
          Google
        </button></a>
        <img className={s.gLogo} src={gIcon} alt={'gIcon'} />
      </div>
      <p className={s.secondPara}>
        Or login to our app using e-mail and password:
      </p>
      <form className={s.innerForm}>
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
          <button className={s.regBtn} onClick={handleSignIn}>
            Sign In
          </button>
          <button data-auth="reg" className={s.regBtn} onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContent
            onClose={toggleModal}
          />
          {/* <p>
            confirm your email{' '}
            <a target="blank" href={formatUserEmail} onClose={toggleModal}>{userEmail}</a>
          </p> */}
        </Modal>
      )}
    </div>
  );
}
