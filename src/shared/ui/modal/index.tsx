import { FC } from 'react';

import { createPortal } from 'react-dom';

import closeIconWhite from '../../../assets/icons/closeIconWhite.svg';
import useClickOutside from '../../hooks/useClickOutside';
import ModalOverlay from '../overlay';

import styles from './index.module.scss';

import { TModalProps } from './type';

const ModalPortal: FC<TModalProps> = ({
  isOpen,
  onClose,
  children,
  haveCloseIcon = true
}) => {
  const modalRef = useClickOutside(onClose);

  if (!isOpen) return null;

  return createPortal(
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
      <ModalOverlay isOpen={isOpen} onClose={onClose} />
    </>,
    document.body
  );
};

export default ModalPortal;
