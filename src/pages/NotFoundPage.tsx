import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.text}>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" className={styles.link}>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;