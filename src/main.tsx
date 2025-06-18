import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Banner from './components/Banner/Banner';
import Recommendations from './components/Recommendations/Recommendations';
import Contact from './components/Contact/Contact';
import Partners from './components/Partners/Partners';
import FooterBanner from "./components/Footer/FooterBanner";
import styles from './components/Main/Main.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

interface MainProps {
  cards: Record<string, {
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const Main: React.FC<MainProps> = ({ cards }) => {
  if (!cards) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services cards={cards} />
      <Portfolio />
      <Banner />
      <Recommendations />
      <Contact />
      <Partners />
      <FooterBanner />
    </main>
  );
};

export default Main;