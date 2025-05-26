import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import iconClose from '../../assets/icons/closeIcon.svg';
import AuthForm from '../../features/Auth/form';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { ModalOverlay } from '../../shared/ui/overlay';

import styles from './index.module.scss';

export const AuthModal: FC = () => {
  const onClose = () => {
    navigate(-1);
  };
  const modalRef = useClickOutside(onClose);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__content}>
          <AuthForm closeModal={onClose} />
          <button onClick={onClose} className={styles.modal__close}>
            <img
              src={iconClose}
              alt="иконка закрытия модального окна авторизации"
            />
          </button>
        </div>
      </div>
      <ModalOverlay />
    </>
  );
};
