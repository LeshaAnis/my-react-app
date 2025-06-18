import React from 'react';
import styles from './Footer.module.css';
import FooterIcon from '../../assets/icons/Component 3.svg';

const FooterBanner: React.FC = () => {
  return (
    <div className={styles.footer_banner}>
      <img className={styles.footer_banner__image} src={FooterIcon} alt="Footer Banner" />   
    </div>
  );
};

export default FooterBanner;