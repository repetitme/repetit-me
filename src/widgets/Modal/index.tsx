import { FC, ReactNode, useEffect, useState } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import iconCloseWhite from '../../assets/icons/closeIconWhite.svg';
import AuthForm from '../../features/auth';
import useClickOutside from '../../shared/hooks/useClickOutside';
import useScrollLock from '../../shared/hooks/useScrollLock';
import ModalOverlay from '../../shared/ui/overlay';

import styles from './index.module.scss';

type TModal = {
  login?: boolean;
  children: ReactNode;
  close?: () => void;
};

export const Modal: FC<TModal> = ({ login, children, close }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => {
    if (!children) {
        navigate(-1);
      } else close && close();
      }, 300);
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }
  }, []);

  useScrollLock(isOpen);

  const modalRef = useClickOutside(onClose);

  return (
    <>
      <div
        className={cn(styles.modal, { [styles.active]: isOpen })}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__content}>
          {children ?? <AuthForm closeModal={onClose} login={login} />}
          <button onClick={onClose} className={styles.modal__close}>
            <img
              src={iconCloseWhite}
              alt="иконка закрытия модального окна авторизации"
            />
          </button>
        </div>
      </div>
      <ModalOverlay isOpen={isOpen} />
    </>
  );
};

export default Modal;
