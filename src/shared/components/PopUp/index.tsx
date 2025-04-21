import React, { useEffect, useCallback } from 'react';
import closeIcon from '../../../assets/icons/close.png';
import styles from './index.module.scss';
import { PopupProps } from './type';

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  content,
  confirmButtonText = 'Да',
  cancelButtonText = 'Нет',
  onConfirm,
  variant = 'default',
  showCancelButton = true,
  showCloseButton =true
}) => {
  
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className={styles.popup}>
      {showCloseButton && (<button className={styles.popup__close} onClick={onClose}>
        <img src={closeIcon} alt="Закрыть" />
      </button>)}
      <div className={styles.popup__overlay} onClick={onClose}></div>
      <div className={styles.popup__content}>
        {title && <h2 className={styles.popup__title}>{title}</h2>}
        {content && <div className={styles.popup__text}>{content}</div>}
        <div className={styles.popup__buttons}>
          {showCancelButton && (
            <button className={styles.popup__button} onClick={onClose}>
              {cancelButtonText}
            </button>
          )}
          {onConfirm && (
            <button
              className={`${styles.popup__button} ${styles[`popup_variant_${variant}`]}`}
              onClick={onConfirm}
            >
              {confirmButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
