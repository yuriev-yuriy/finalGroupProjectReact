// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Navigation from '../Navigation';
import Burger from './Burger';
import routes from '../../routes';
// import { authSelectors } from '../../redux/auth/auth-selectors';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo to={routes.MAIN_VIEW} onOpenMobileMenu={setIsOpen} />
        <div className={styles.wrapper}>
          <Navigation isOpen={isOpen} onOpenMobileMenu={setIsOpen} />
          <Burger isOpen={isOpen} onOpenMobileMenu={setIsOpen} />
        </div>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <div className={styles.line}></div>
      </div>
    </header>
  );
}

export default Header;
