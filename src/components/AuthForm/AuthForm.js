import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './AuthForm.module.css';
import Modal from '../Modal';
import { authSelectors } from '../../redux/auth';
import ModalContent from '../ModalContent';
import { ReactComponent as GoogleIcon } from '../../assets/icons/svg/googleVector.svg';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [showModal, setShowModal] = useState(false);
  const [btnClick, setBtnClick] = useState('');

  const dispatch = useDispatch();
    const isModalAuthSelector = useSelector(authSelectors.getIsModalAuth);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
  if (isModalAuthSelector === true) {
     openModal();
  }
  }, [isModalAuthSelector]);
  // const toggleModal = () => {
  //   setShowModal(state => !state);
  // }, []);

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
      setBtnClick('log');
  };
  const handleSignUp = event => {
    event.preventDefault();
      dispatch(authOperations.register({ email, password }));
      reset();
      setBtnClick('reg');
  };

  return (
    <div className={s.forma}>
      <p className={s.para}>
        You can use your Google Account to authorize:
      </p>
      <div className={s.btnWrapper}>
        <a href="https://final-group-project-node.herokuapp.com/auth/google">
          <button className={s.gBtn} type="submit">
            <GoogleIcon className={s.gLogo} alt='gIcon'/>
            Google
          </button>
        </a>
      </div>
      <p className={s.secondPara}>
        Or login to our app using e-mail and password:
      </p>
      <form className={s.innerForm}>
        <label htmlFor="email">
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
        <label htmlFor="password">
          <input
            className={s.input}
            type="password"
            minLength="5"
            maxLength="15"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            value={password}
          />
        </label>
        <div className={s.btnWrapperBottom}>
          <button className={s.regBtn} onClick={handleSignIn} name="log">
            Sign In
          </button>
          <button className={s.regBtn} onClick={handleSignUp} name="reg">
            Sign Up
          </button>
        </div>
      </form>
      {showModal && ( btnClick === 'reg' ?
        <Modal onClose={closeModal}>
           <ModalContent
            onClose={closeModal}/>
        </Modal> : <Modal onClose={closeModal}> <p> invalid credentials </p> </Modal>
      )}
    </div>
  );
}
