import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

function Navigation({ isOpen, onOpenMobileMenu }) {
  return (
    <nav className={isOpen ? styles.navMenuActive : styles.navMenu}>
      {/* isLoggedIn && */}
      <NavLink
        to={routes.CONTACTS_VIEW}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        onClick={() => onOpenMobileMenu(false)}
      >
        <span className={styles.text}>Contacts</span>
      </NavLink>

      {/* <NavLink
                to={routes.MAIN_VIEW}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                Home
            </NavLink>


            <NavLink
                to={routes.MATERIALS_VIEW}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                Materials
            </NavLink>

            <NavLink
                to={routes.CONTACTS_VIEW}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                Contacts
            </NavLink> */}
      {/* <UserInfo/> */}
    </nav>
  );
}

export default Navigation;
