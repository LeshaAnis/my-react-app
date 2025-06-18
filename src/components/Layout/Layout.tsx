import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from '../Layout.module.css';

interface LayoutProps {
  children: Record<string, {
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main 
         cards={children} />
      <Footer />
    </div>
  );
};



export default Layout;