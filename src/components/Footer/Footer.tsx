import React from 'react';
import styles from './Footer.module.css';
import Vector1 from '../../assets/icons/Vector_1.svg';
import Vector5 from '../../assets/icons/Vector_5.svg';
import Vector6 from '../../assets/icons/Vector_6.svg';
import Vector2 from '../../assets/icons/Vector_2.svg';
import Vector3 from '../../assets/icons/Vector_3.svg';
import Vector4 from '../../assets/icons/Vector_4.svg';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={`${styles.footer__section} ${styles.footer__section_top}`}>
          <div className={styles.footer__contacts}>
            <span className={styles.footer__contact}>
              <img className={styles.footer__icon} src={Vector1} alt="" />
              <p className={styles.footer__text}>+92 300 1234567</p>
            </span>
            <span className={styles.footer__contact}>
              <img className={styles.footer__icon} src={Vector5} alt="" />
              <p className={styles.footer__text}>info@nixxsol.com</p>
            </span>
            <span className={styles.footer__contact}>
              <img className={styles.footer__icon} src={Vector6} alt="" />
              <p className={styles.footer__text}>Я прошу прощения за то, что сижу на консилиуме. Я либеро, лектор, судья Маттис А.</p>
            </span>
          </div>
          <div className={styles.footer__links}>
            <span className={styles.footer__list_container}>
              <ul className={styles.footer__list}>
                <li><a href="#about" className={styles.footer__link}>О нас</a></li>
                <li><a href="#services" className={styles.footer__link}>Помощь в IT</a></li>
                <li><a href="#portfolio" className={styles.footer__link}>Портфолио</a></li>
                <li><a href="#contact_us" className={styles.footer__link}>Обратная связь</a></li>
              </ul> 
            </span>
            <span className={styles.footer__subscribe}>
              <form className={`${styles.form} ${styles.form_email}`} action="">
                <label htmlFor="email" className={styles.form__label}>Оставайтесь на связи</label>
                <div className={styles.form__input_container}>
                  <input id="email" className={styles.form__input_email} type="email" placeholder="Адрес электронной почты" readOnly />
                  <button type="button" className={`${styles.form__button} ${styles.form__button_email}`}>Отправить</button>
                </div>
              </form>
            </span>
          </div>
        </div>
        <div className={`${styles.footer__section_bottom}`}>
          <p className={styles.footer__copyright}> &copy;  2022 Nixsol <i><b> Все права защищены. </b></i></p>
          <span className={styles.footer__socials}>
            <img className={styles.footer__icon_bottom} src={Vector2} alt="" />
            <img className={styles.footer__icon_bottom} src={Vector3} alt="" />
            <img className={styles.footer__icon_bottom} src={Vector4} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;