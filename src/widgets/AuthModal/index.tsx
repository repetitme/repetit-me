import { FC } from 'react';

import iconClose from '../../assets/icons/closeIcon.svg';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { ModalOverlay } from '../../shared/ui/overlay';

import styles from './index.module.scss';

import { AuthModalProps } from './types';

export const AuthModal: FC<AuthModalProps> = ({ onClose, children }) => {
  const modalRef = useClickOutside(onClose);

  return (
    <>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__content}>
          {children}
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
