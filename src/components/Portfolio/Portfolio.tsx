import { Swiper, SwiperSlide } from 'swiper/react';
// Правильные импорты для Swiper 8+
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Импорт стилей (новый путь в Swiper 8+)

import 'swiper/css';


import styles from './Portfolio.module.css';
import { useRef } from 'react';

const Portfolio = () => {
  const nextButton = useRef<HTMLButtonElement>(null);
  const prevButton = useRef<HTMLButtonElement>(null);

  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolio__header}>
        <span className={styles.portfolio__info}>
          <h1 className={styles.portfolio__title}>Портфолио</h1>
          <p className={styles.portfolio__description}>
            Мы должны знать, что такое долг, и знать, что такое закон.
          </p>
          <button className={styles.portfolio__button}>Больше портфолио &gt;</button>
        </span>
      </div>

      <div className={styles.swiper__container}>


        <Swiper
          modules={[
            Navigation,
            Pagination, 
            Scrollbar]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          navigation={{
            nextEl: nextButton.current,
            prevEl: prevButton.current,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          pagination={{

          }}
        >

          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public/images/Rectangle 1394.png" alt="Проект 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public//images/photo_2024-12-18_17-28-58.jpg" alt="Проект 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public/images/Rectangle 1394.png" alt="Проект 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public//images/photo_2024-12-18_17-28-58.jpg" alt="Проект 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public/images/Rectangle 1394.png" alt="Проект 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img__swipper} src="../../public//images/photo_2024-12-18_17-28-58.jpg" alt="Проект 1" />
          </SwiperSlide>
        </Swiper>

        <div className={styles.games__banner}>
          <div className={styles.text__content}>
            <h2>Games</h2>
            <a href="#" className={styles.see__all}>Больше игр →</a>
          </div>
        </div>

        <div className={styles.slider__controls}>
          <button ref={prevButton} className={styles.prev}>&lt;</button>
          <button ref={nextButton} className={styles.next}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

