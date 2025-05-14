import React from 'react';

import closeIcon from '../../../assets/icons/close.svg';
import useClickOutside from '../../hooks/useClickOutside';
import { ModalOverlay } from '../../ui/overlay';
import { popupContent } from './data';

import styles from './index.module.scss';

import { PopupProps } from './type';

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  variant,
  showCancelButton = true,
  showCloseButton = true,
  onConfirm
}) => {
  const ref = useClickOutside(() => {
    onClose();
  });

  if (!isOpen) return null;

  const { title, text, confirmButtonText, cancelButtonText } =
    popupContent[variant];

  return (
    <>
      <div className={styles.popup} ref={ref}>
        <div className={styles.popup__content}>
          {showCloseButton && (
            <button className={styles.popup__close} onClick={onClose}>
              <img src={closeIcon} alt="иконка закрытия попапа" />
            </button>
          )}
          {title && <h2 className={styles.popup__title}>{title}</h2>}
          {text && (
            <div className={styles.popup__text}>
              <p className={styles.popup__p}>{text}</p>
            </div>
          )}
          <div className={styles.popup__buttons}>
            {showCancelButton && cancelButtonText && (
              <button className={styles.popup__button} onClick={onClose}>
                {cancelButtonText}
              </button>
            )}
            {confirmButtonText && (
              <button
                className={`${styles.popup__button} ${styles[`popup_color_${popupContent[variant].color}`]}`}
                onClick={onConfirm}
              >
                {confirmButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>
  );
};

export default Popup;
