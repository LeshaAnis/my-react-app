import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/icons/Nixxsol.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        <Link className={styles.logo__Cart} to="/cards">Карточки</Link>
      </nav>
    </header>
  );
};

export default Header;