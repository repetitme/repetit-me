import { FC } from 'react';

import iconClose from '../../../assets/icons/closeIcon.svg';
import { ModalOverlay } from '../../../shared/components/Overlay';

import styles from './index.module.scss';

import { AuthModalProps } from './types';

export const AuthModal: FC<AuthModalProps> = ({
  type,
  onClose,
  onToggle,
  children
}) => {
  return (
    <>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>
            {type ? 'Вход' : 'Регистрация'}
          </h2>
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
          {!type && (
            <p>
              Уже есть аккаунт?{' '}
              {/*TODO: когда будет готов роутинг заменить на Link*/}
              <a href="#" className={styles.modal__enter} onClick={onToggle}>
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
