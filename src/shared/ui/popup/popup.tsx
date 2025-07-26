import { FC, ReactNode, useEffect, useState } from 'react';

import cn from 'classnames';

import iconClose from '../../../assets/icons/close.svg';
import useClickOutside from '../../hooks/useClickOutside';
import useScrollLock from '../../hooks/useScrollLock';
import Button from '../button';
import ModalOverlay from '../overlay';

import styles from './index.module.scss';

interface PopupProps {
  isOpen: boolean;
  close: () => void;
  variant?: 'default' | 'small' | 'form';
  title?: string;
  isValid?: boolean;
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
  isValid,
  isOpen,
  close,
  buttonText,
  buttonOnClick,
  secondaryButtonText,
  secondaryButtonOnClick
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
      close();
      //delete
    }, 300);
  };

  const formatChildren = () => {
    if (
      children &&
      typeof children === 'string' &&
      children.includes('Далее')
    ) {
      const [before, after] = children.split('Далее');
      return (
        <span>
          {before}
          <span className={styles.bold}>"Далее"</span>
          {after}
        </span>
      );
    } else {
      return children;
    }
  };

  const isNext = () => {
    if (secondaryButtonText === 'Далее') {
      return true;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [isOpen]);

  useScrollLock(isMounted);

  const modalRef = useClickOutside(handleClose);

  if (!isMounted) return null;

  return (
    <>
      <div
        ref={variant === 'small' ? null : modalRef}
        className={cn(styles.popup, {
          [styles.active]: isVisible,
          [styles.popup__small]: variant === 'small',
          [styles.popup__form]: variant === 'form'
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {variant !== 'small' && (
          <button onClick={handleClose} className={styles.popup__close}>
            <img src={iconClose} alt="иконка закрытия модального окна" />
          </button>
        )}
        {title && (
          <h2
            className={cn(styles.popup__title, {
              [styles.popup__form__title]: variant === 'form'
            })}
          >
            {title}
          </h2>
        )}
        <div
          className={cn(styles.popup__content, {
            [styles.popup__small__content]: variant === 'small',
            [styles.popup__form__content]: variant === 'form'
          })}
        >
          {formatChildren()}
          <div className={cn(styles.popup__buttons, {
            [styles.popup__form__buttons]: variant === 'form'
          })}>
            <Button
              className={styles.popup__button}
              text={
                variant === 'small'
                  ? (buttonText ?? 'Нет')
                  : (buttonText ?? 'Закрыть')
              }
              variant={variant === 'small' ? 'white' : 'purple'}
              onClick={buttonOnClick}
              disabled={variant === 'form' ? !isValid : false}
            />
            {secondaryButtonOnClick && (
              <Button
                className={styles.popup__button}
                text={secondaryButtonText || 'Да'}
                variant={isNext() ? 'purple' : 'white'}
                onClick={secondaryButtonOnClick}
              />
            )}
          </div>
        </div>
      </div>
      <ModalOverlay isOpen={isVisible} />
    </>
  );
};

export default Popup;
