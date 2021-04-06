import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import UserInfo from '../UserInfo';
import styles from './Navigation.module.css';

function Navigation({ isOpen, onOpenMobileMenu }) {
  return (
    <nav className={isOpen ? styles.navMenuActive : styles.navMenu}>
      {/* isLoggedIn && */}
      {/* <NavLink
        to={routes.CONTACTS_VIEW}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        onClick={() => onOpenMobileMenu(false)}
      >
        <span className={styles.text}>Contacts</span>
      </NavLink> */}

      <NavLink
        to={routes.MAIN_VIEW}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        onClick={() => onOpenMobileMenu(false)}
      >
        <span className={styles.text}>Home</span>
      </NavLink>

      <NavLink
        to={routes.USEFUL_INFO_VIEW}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        onClick={() => onOpenMobileMenu(false)}
      >
        <span className={styles.text}>Materials</span>
      </NavLink>

      <NavLink
        to={routes.CONTACTS_VIEW}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        onClick={() => onOpenMobileMenu(false)}
      >
        <span className={styles.text}>Contacts</span>
      </NavLink>
      {/* <UserInfo /> */}
    </nav>
  );
}

export default Navigation;
