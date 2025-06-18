import React from 'react';
import { Link } from 'react-router-dom';
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

const HomePage: React.FC = () => {
  return (
    <section className={styles.container}>
      <Header/>
      <Hero />
      <About />

      <h2 className={styles.title}>
        <Link to="/cards" className={styles.link}>Наши карточки</Link>
      </h2>
      <div className={styles.cardList}>
        <CardList limit={3} />
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

export default HomePage;