import React from 'react';
import styles from './Partners.module.css';
import PArtIMG1 from '../../assets/icons/Frame 48096173.png';
import PArtIMG2 from '../../assets/icons/Frame 48096174.png';
import PArtIMG3 from '../../assets/icons/Frame 48096175.png';
import PArtIMG4 from '../../assets/icons/Frame 48096176.png';
import PArtIMG5 from '../../assets/icons/Frame 48096177.png';

const Partners: React.FC = () => {
  return (
    <div className={styles.partners}>
      <span className={styles.partners__container}>
        <img className={styles.partners__image} src={PArtIMG1} alt="Partner 1" />
        <img className={styles.partners__image} src={PArtIMG2} alt="Partner 2" />
        <img className={styles.partners__image} src={PArtIMG3} alt="Partner 3" />
        <img className={styles.partners__image} src={PArtIMG4} alt="Partner 4" />
        <img className={styles.partners__image} src={PArtIMG5} alt="Partner 5" />
      </span>
    </div>
  );
};

export default Partners;