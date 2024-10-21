import styles from '../Header/Header.module.scss';
import logo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="Логотип Aviasales" className="logo__img" width="60" height="60" />
      </a>
    </header>
  );
};

export default Header;
