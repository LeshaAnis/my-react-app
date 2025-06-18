import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__header}>
        <h1 className={styles.about__title}>О нас</h1>
      </div>
      <div className={styles.about__content}>
        <p className={`${styles.about__text} ${styles.about__text_upper}`}>
          Лорем ипсум - основная команда. Советы по переодеванию в соответствии с жизнью
        </p>
        <p className={`${styles.about__text} ${styles.about__text_lower}`}>
          Маттис или что-то в этом роде, Маттис - мой лучший друг среди венерианцев. Священное писание - это изречение мудреца, которое говорит само за себя. В орнаре или Лео одио магна
        </p>
        <div className={styles.about__stats}>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>100</span>
            <span className={styles.about__stat_label}>счастливых клиентов</span>
          </p>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>05</span>
            <span className={styles.about__stat_label}>лет в бизнесе</span>
          </p>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>50</span>
            <span className={styles.about__stat_label}>общее количество участников</span>
          </p>
        </div> 
      </div>
    </div>
  );
};

export default About;