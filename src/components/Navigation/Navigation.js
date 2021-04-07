import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { authSelectors, authOperations } from '../../redux/auth';
import UserInfo from '../UserInfo';
// import UserAvatarUpdate from '../UserAvatarUpdate';
import { ReactComponent as SignOutIcon } from '../../assets/icons/svg/signOut.svg';
import styles from './Navigation.module.css';

function Navigation({ isOpen, onOpenMobileMenu }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <nav className={isOpen ? styles.navMenuActive : styles.navMenu}>
        {isLoggedIn ? (
          <>
            <div className={styles.wrapper}>
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
            </div>
            <NavLink
              to={routes.AUTH_VIEW}
              onClick={() => onOpenMobileMenu(false)}
            >
              <SignOutIcon
                className={styles.signOutBtn}
                width="16px"
                height="16px"
                onClick={() => dispatch(authOperations.logOut())}
              />
            </NavLink>
          </>
        ) : (
          <NavLink
            to={routes.CONTACTS_VIEW}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={() => onOpenMobileMenu(false)}
          >
            <span className={styles.text}>Contacts</span>
          </NavLink>
        )}
      </nav>
      {isLoggedIn && <UserInfo onOpenMobileMenu={onOpenMobileMenu} />}
    </div>
  );
}

export default Navigation;
