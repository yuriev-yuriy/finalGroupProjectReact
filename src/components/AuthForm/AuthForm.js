import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { authOperations } from '../../redux/auth';
import s from './AuthForm.module.css';
import gIcon from '../../assets/icons/google-logo.png';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [checkForm, setCheckForm] = useState('');

  const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'At least 8 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => {
      formik.values.email = '';
      formik.values.password = '';
      if (checkForm === 'login') {
        dispatch(authOperations.logIn({ email, password }));
      }
      if (checkForm === 'register') {
        dispatch(authOperations.register({ email, password }));
      }
    },
  });
  const handleSelectFrom = e => {
    const {
      target: { dataset },
    } = e;
    if (dataset.login === 'login') {
      setCheckForm('login');
      document.getElementById('btn-register').style.backgroundColor =
        ' #c2c1c1';
      document.getElementById('btn-login').style.backgroundColor =
        'rgb(241, 114, 10)';
    }
    if (dataset.register === 'register') {
      setCheckForm('register');
      document.getElementById('btn-register').style.backgroundColor =
        'rgb(241, 114, 10)';
      document.getElementById('btn-login').style.backgroundColor = ' #c2c1c1';
    }
  };
  const form = (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        className={s.TextField__formik}
        id="password"
        name="password"
        label="Password*"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        className={s.btn__formik}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </form>
  );

  return (
    <div className={s.forma__wrapper}>
      <p className={s.para}>
        You can use google registration and login even you have created an
        account by simple way!
      </p>
      <div className={s.btnWrapper}>
        <a href="https://final-group-project-node.herokuapp.com/auth/google">
          <button className={s.gBtn} type="submit">
            Google
          </button>
        </a>
        <img className={s.gLogo} src={gIcon} alt={'gIcon'} />
      </div>
      <div className={s.form__btn__container}>
        <button
          id="btn-login"
          className={s.form__btn__container__btn}
          onClick={handleSelectFrom}
          data-login="login"
          type="click"
        >
          Login
        </button>
        <button
          id="btn-register"
          className={s.form__btn__container__btn}
          onClick={handleSelectFrom}
          data-register="register"
          type="click"
        >
          Register
        </button>
      </div>
      {checkForm === 'login' && form}
      {checkForm === 'register' && form}
    </div>
  );
}
