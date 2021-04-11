import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { authOperations } from '../../redux/auth';
import { ReactComponent as SignOutIcon } from '../../assets/icons/svg/signOut.svg';
// import defaultAvatar from './default-avatar.png';
import styles from './UserInfo.module.css';

function UserInfo({ onOpenMobileMenu }) {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Добро пожаловать, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Выйти
      </button> */}
      <div className={styles.userInfo}>
        <div className={styles.initial}>D</div>
        <span className={styles.name}>Dimas</span>
      </div>

      <NavLink to={routes.AUTH_VIEW} onClick={() => onOpenMobileMenu(false)}>
        <SignOutIcon
          className={styles.signOutBtnLg}
          width="16px"
          height="16px"
          onClick={() => dispatch(authOperations.logOut())}
        />
      </NavLink>
    </div>
  );
}

export default UserInfo;
