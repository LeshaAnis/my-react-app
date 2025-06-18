import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CardList from '../components/Services/CardList';

import Header from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Banner from '../components/Banner/Banner';
import Recommendations from '../components/Recommendations/Recommendations';
import Contact from '../components/Contact/Contact';
import Partners from '../components/Partners/Partners';
import FooterBanner from '../components/Footer/FooterBanner';
import styles from './Pages.module.css';

const CardsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialLimit = parseInt(searchParams.get('limit') || '10', 10);
  const [limit, setLimit] = useState(Math.max(1, Math.min(20, initialLimit))); 

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('limit', limit.toString());
    setSearchParams(newSearchParams, { replace: true }); 
  }, [limit, setSearchParams]);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    if (!isNaN(newLimit)) {
      setLimit(Math.max(1, Math.min(20, newLimit))); 
    }
  };

  return (
    <section className={styles.container}>
      <Header/>
      <Hero />
      <About />
      <h2 className={styles.title}>Карточки</h2>
      <div className={styles.controls}>
        <label className={styles.label}>
          Показать:
          <input
            type="number"
            value={limit}
            onChange={handleLimitChange}
            min="1"
            max="20"
            className={styles.input}
          />
          шт.
        </label>
        <button
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          На главную
        </button>
      </div>
      <div className={styles.cardList}>
        <CardList limit={limit} />
      </div>
      <Portfolio />
      <Banner />
      <Recommendations />
      <Contact />
      <Partners />
      <FooterBanner />
    </section>
  );
};

export default CardsPage;