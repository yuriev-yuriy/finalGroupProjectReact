import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Footer.module.css';

const Footer = () => {
  // const url = '#';
  return (
    <footer className={s.footer}>
      <p className={s.description}>
        &#169; 2021 | All Rights Reserved | Developed with{' '}
        <span className={s.icon}>&#10084;</span> by{' '}
        <NavLink to={routes.CONTACTS_VIEW} className={s.link}>
          GoIT Students
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
