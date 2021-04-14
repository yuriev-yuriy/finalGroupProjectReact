import styles from './Burger.module.css';
import { ReactComponent as MenuIcon } from '../../../assets/icons/svg/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/svg/close.svg';

function Burger({ isOpen, onOpenMobileMenu }) {
  return (
    <div className={styles.burger}>
      <div
        className={
          !isOpen ? styles.toggle : `${styles.toggle} + ' ' + ${styles.active}`
        }
        type="button"
        onClick={() => onOpenMobileMenu(!isOpen)}
      >
        {/* {!isOpen ? <MenuIcon /> : <CloseIcon />} */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Burger;
