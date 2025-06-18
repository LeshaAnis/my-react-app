import React from 'react';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__spinner}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.circle}></div>
        ))}
      </div>
      <div className={styles.preloader__content}>
        <p className={styles.preloader__text}>
          Пожалуйста, <br /> подождите...
        </p>
      </div>
    </div>
  );
};

export default Preloader;