import React from 'react';
import styles from './Services.module.css';

interface CardProps {
  title: string;
  body: string; 
  imageUrl?: string; 
}

const Card: React.FC<CardProps> = ({ title, body, imageUrl }) => {
  return (
    <div className={styles.services_section}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.services_section_images} />}
      <p className={styles.services_section_upper}>{title}</p>
      <p className={styles.services_section_lower}>{body}</p>
    </div>
  );
};

export default Card;