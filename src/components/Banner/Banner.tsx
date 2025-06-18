import React from 'react';
import styles from './Banner.module.css';
import BannerIcons1 from '../../assets/icons/image 8.png';
import BannerIcons2 from '../../assets/icons/image 9.png';
import BannerIcons3 from '../../assets/icons/image 10.png';
import BannerIcons4 from '../../assets/icons/image 11.png';
import BannerIcons5 from '../../assets/icons/image 12.png';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.banner__container}>
        <img className={styles.banner__image} src={BannerIcons1} alt="Partner 1" />
        <img className={styles.banner__image} src={BannerIcons2} alt="Partner 2" />
        <img className={styles.banner__image} src={BannerIcons3} alt="Partner 3" />
        <img className={styles.banner__image} src={BannerIcons4} alt="Partner 4" />
        <img className={styles.banner__image} src={BannerIcons5} alt="Partner 5" />
      </span>    
    </div>
  );
};

export default Banner;