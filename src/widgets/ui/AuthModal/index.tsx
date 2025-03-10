import { FC } from 'react';
import styles from './index.module.scss';
import { AuthModalProps } from './types';
import { ModalOverlay } from '../../../shared/components/Overlay';
import iconClose from '../../../assets/icons/closeIcon.svg';

export const AuthModal: FC<AuthModalProps> = ({ title, onClose, children }) => {
  const isRegistration = title.toLowerCase().includes('регистрация');
  return (
    <>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>{title}</h2>
          <button onClick={onClose} className={styles.modal__close}>
            <img
              src={iconClose}
              alt="иконка закрытия модального окна авторизации"
            />
          </button>
        </div>
        <div className={styles.modal__content}>{children}</div>
        <div className={styles.modal__footer}>
          <p>
            Нажимая «Получить код» вы соглашаетесь с{' '}
            <a href="#" target="_blank">
              политикой конфиденциальности и пользовательским соглашением
            </a>
          </p>
          {isRegistration && (
            <p>
              Уже есть аккаунт?{' '}
              <a href="#" className={styles.modal__enter}>
                Войти
              </a>
            </p>
          )}
        </div>
      </div>
      <ModalOverlay onClose={onClose}></ModalOverlay>
    </>
  );
};
