import React from 'react';
import styles from './Recommendations.module.css';
import PecomImage1 from '../../assets/images/Frame 48096192.png';
import PecomImage2 from '../../assets/images/Frame 1000000912.png';

const Recommendations: React.FC = () => {
  return (
    <div className={styles.recommendations}>
      <div className={styles.recommendations__header}>
        <span className={styles.recommendations__info}>
          <h1 className={styles.recommendations__title}>Рекомендации</h1>
          <p className={styles.recommendations__description}>
            Мы должны знать, что такое долг, и знать, что такое закон. В сущности, это важнейший элемент управления.
          </p>
          <button className={styles.recommendations__button}>Исследуйте больше</button>
        </span>
      </div>
      <div className={`${styles.recommendations__content} ${styles.recommendations__content_common}`}>
        <div className={`${styles.recommendations__content} ${styles.recommendations__content_medium}`}>
          <img className={styles.recommendations__image} src={PecomImage1} alt="Recommendation 1" />
        </div>
        <div className={`${styles.recommendations__content} ${styles.recommendations__content_low}`}>
          <img className={styles.recommendations__images} src={PecomImage2} alt="Recommendation 2" />
        </div>
      </div>    
    </div>
  );
};

export default Recommendations;