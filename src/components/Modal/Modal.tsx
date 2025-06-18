import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  

  return (
    <div 
      id="modal" 
      className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
    >
      <div className={styles.modal__content}>
        <span 
          id="closeModal" 
          className={styles.modal__close} 
          onClick={onClose}
          role="button" 
          aria-label="Закрыть модальное окно" 
          tabIndex={0}
        >
          &times;
        </span>
        <form id="modalForm" className={`${styles.form} ${styles.form__modal}`}>
          <input className={styles.form__input_modal} type="text" id="name" placeholder="Имя" required />
          <input className={styles.form__input_modal} type="text" placeholder="Электронная почта" readOnly/>
          <input className={styles.form__input_modal} type="text" placeholder="Телефон (необязательно)" readOnly/>
          <textarea 
            className={styles.form__textarea_modal} 
            id="message" 
            rows={4} 
            placeholder="Расскажите нам о проекте, над которым вы работаете *(необязательно)" 
            readOnly
          ></textarea>
          <div className={styles.form__buttons}>
            <button className={`${styles.form__button} ${styles.form__button_submit}`}>Отправить</button>
            <button 
              className={`${styles.form__button} ${styles.form__button_cancel}`}
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;