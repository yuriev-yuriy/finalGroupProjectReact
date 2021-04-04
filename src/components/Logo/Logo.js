import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo({ to }) {
  return (
    <NavLink to={to}>
      <div className={styles.logo}>
        <p className={styles.whiteText}>Pro</p>
        <p className={styles.darkText}>[Test_]</p>
      </div>
    </NavLink>
  );
}

export default Logo;
