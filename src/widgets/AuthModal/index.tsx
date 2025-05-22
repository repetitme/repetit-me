import { FC } from 'react';

<<<<<<< HEAD:src/widgets/ui/AuthModal/index.tsx
export const AuthModal: FC<AuthModalProps> = ({ type, children, toLogin, onClose }) => {
=======
import iconClose from '../../assets/icons/closeIcon.svg';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { ModalOverlay } from '../../shared/ui/Overlay';

import styles from './index.module.scss';

import { AuthModalProps } from './types';

export const AuthModal: FC<AuthModalProps> = ({
  type,
  onClose,
  onToggle,
  children
}) => {
  const modalRef = useClickOutside(onClose);

>>>>>>> ca7f4903ee37260cedafd88a4b4e9b1a9f733853:src/widgets/AuthModal/index.tsx
  return (
    <>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__header}>
<<<<<<< HEAD:src/widgets/ui/AuthModal/index.tsx
          <h2 className={styles.modal__title}>{type ? 'Вход' : 'Регистрация'}</h2>
=======
          <h2 className={styles.modal__title}>
            {type ? 'Вход' : 'Регистрация'}
          </h2>
>>>>>>> ca7f4903ee37260cedafd88a4b4e9b1a9f733853:src/widgets/AuthModal/index.tsx
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
<<<<<<< HEAD:src/widgets/ui/AuthModal/index.tsx
            <p>
              Уже есть аккаунт?{' '}
              <a href="#" onClick={toLogin} className={styles.modal__enter}>
=======
            <p className={styles.modal__enter}>
              Уже есть аккаунт?{' '}
              <a href="#" onClick={(e) => onToggle(e)}>
>>>>>>> ca7f4903ee37260cedafd88a4b4e9b1a9f733853:src/widgets/AuthModal/index.tsx
                Войти
              </a>
            </p>
          )}
        </div>
      </div>
      <ModalOverlay />
    </>
  );
};
