import { FC } from 'react';

import closeIconWhite from '../../../assets/icons/closeIconWhite.svg';
import useClickOutside from '../../hooks/useClickOutside';
import ModalOverlay from '../overlay';

import styles from './index.module.scss';

import { ModalProps } from './type';

export const Modal: FC<ModalProps> = ({ haveCloseIcon, onClose, children }) => {
  const modalRef = useClickOutside(onClose);
  return (
    <>
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {haveCloseIcon && (
          <button onClick={onClose} className={styles.modal__close}>
            <img
              src={closeIconWhite}
              alt="Иконка закрытия модального окна уведомления"
            />
          </button>
        )}
        {children}
      </div>
      <ModalOverlay isOpen onClose={onClose} />
    </>
  );
};
