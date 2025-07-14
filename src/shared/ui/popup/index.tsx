import { FC, ReactNode, useEffect, useState } from 'react';

import cn from 'classnames';

import iconClose from '../../../assets/icons/close.svg';
import useClickOutside from '../../hooks/useClickOutside';
import useScrollLock from '../../hooks/useScrollLock';
import Button from '../button';
import ModalOverlay from '../overlay';

import styles from './index.module.scss';

interface PopupProps {
  variant?: 'default' | 'small' | 'form';
  title?: string;
  children?: ReactNode;
  buttonText?: string;
  secondaryButtonText?: string;
  buttonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
}

const Popup: FC<PopupProps> = ({
  variant = 'default',
  title,
  children,
  buttonText,
  buttonOnClick,
  secondaryButtonText,
  secondaryButtonOnClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      //delete
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
        ref={modalRef}
        className={cn(styles.popup, {
          [styles.active]: isOpen,
          [styles.popup__small]: variant === 'small'
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={styles.popup__close}>
          <img src={iconClose} alt="иконка закрытия модального окна" />
        </button>
        <h2 className={styles.popup__title}>{title}</h2>
        <div className={styles.popup__content}>
          {children}
          <div className={styles.popup__buttons}>
            <Button
              text={buttonText || 'Закрыть'}
              variant="purple"
              onClick={buttonOnClick}
            />
            {secondaryButtonText && (
              <Button
                text={secondaryButtonText}
                variant="white"
                onClick={secondaryButtonOnClick}
              />
            )}
          </div>
        </div>
      </div>
      <ModalOverlay isOpen={isOpen} />
    </>
  );
};

export default Popup;
