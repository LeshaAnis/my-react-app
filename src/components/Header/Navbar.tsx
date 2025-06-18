import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import styles from './Navbar.module.css';
import HomeIcon from "../../assets/icons/Vectors.svg";
import Logo from '../../assets/icons/Nixxsol.png';
import ServicesIcon from '../../assets/icons/List.svg';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__list} ${styles.nav__list_upper}`}>
        <div className={styles.nav__avatar}>
          <li>
            <a href="index.html" className={styles.nav__items}>
              <img className={styles.nav__icons} src={HomeIcon} alt="Home" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <img className={styles.nav__logo} src={Logo} alt="Nixxsol" />
            </a>
          </li>
        </div>
      </ul>

      <ul className={`${styles.nav__list} ${styles.nav__list_lower}`}>
        <li><a href="#about" className={styles.nav__item}>О нас</a></li>
        <li>
          <a href="#services" className={styles.nav__item}>
            IT сервисы
            <img className={styles.nav__icon} src={ServicesIcon} alt="Services" />
          </a>
        </li>
        <li><a href="#portfolio" className={styles.nav__item}>Портфолио</a></li>
        <li>
          <a 
            href="#" 
            className={`${styles.nav__item} ${styles.nav__item_feedback}`}
            onClick={handleOpenModal}
          >
            Обратная связь
          </a>
        </li>
      </ul>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;  