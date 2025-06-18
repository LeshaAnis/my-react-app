import React from 'react';
import ServiceCard from './ServiseCard';

import styles from './Services.module.css';

interface ServicesProps {
  cards: Record<string, {
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const Services: React.FC<ServicesProps> = ({ cards }) => {
  return (
    <div className={styles.services_div}>
    <div id="services" className={styles.services}>
      <h1 className={styles.services__title}>Наши сервисы</h1>
      <div id="id_services_section" className={styles.services_sections}>
        {Object.values(cards).map((card, index) => (
          <ServiceCard 
            key={`card-${index}`}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;