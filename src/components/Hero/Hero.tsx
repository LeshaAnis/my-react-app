import React from 'react';
import styles from './Hero.module.css';
import HeroLogo from "../../assets/images/Main_img.png";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <a href="#" className={styles.hero__link}>
        <h2 className={styles.hero__title}>Преодоление разрыва между идеями и реальностью</h2>
        <img className={styles.hero__image} src={HeroLogo}  alt="Hero" />
        
      </a>
    </div>
  );
};

export default Hero;