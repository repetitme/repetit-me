import { FC } from 'react';
import { useEffect, useState } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import iconClose from '../../assets/icons/closeIcon.svg';
import AuthForm from '../../features/Auth';
import useClickOutside from '../../shared/hooks/useClickOutside';
import ModalOverlay from '../../shared/ui/overlay';

import styles from './index.module.scss';

const AuthModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }
  }, []);

  // No scroll, no shift
  useEffect(() => {
    const scrollBar = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBar}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const modalRef = useClickOutside(onClose);

  return (
    <>
      <div
        className={cn(styles.modal, {
          [styles.active]: isOpen
        })}
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
      <ModalOverlay isOpen={isOpen} />
    </>
  );
};

export default AuthModal;
