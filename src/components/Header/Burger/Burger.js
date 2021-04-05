import styles from './Burger.module.css';
import { ReactComponent as MenuIcon } from '../../../assets/icons/svg/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/svg/close.svg';

function Burger({ isOpen, onOpenMobileMenu }) {
  return (
    <div className={styles.burger}>
      <button
        className={styles.button}
        type="button"
        onClick={() => onOpenMobileMenu(!isOpen)}
      >
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
    </div>
  );
}

export default Burger;
