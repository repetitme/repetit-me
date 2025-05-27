import { IPopupContainer } from './type'
import styles from './index.module.scss'
import { useEffect, useRef } from 'react';

export const PopupContainer: React.FC<IPopupContainer> = ({isOpen, onClose, children, popupTitle, buttonTitle, isDisabled}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

    return (
        <div className={styles.popup__overlay}>
            <div className={styles.popup} ref={popupRef}>
                <div className={styles.popup__close}>
                  <button className={styles.popup__close_button} onClick={onClose}>
                    <img  className={styles.popup__close_image} src='src/entities/aboutService/data/close.svg' alt="Закрыть"></img>
                  </button>
                </div>
                <div className={styles.popup__container}>
                  <p className={styles.popup__title}>{popupTitle}</p>
                  <div className={styles.popup__content}>
                    {children}
                  </div>
                  <button className={styles.popup__button} disabled={isDisabled}>{buttonTitle}</button>
                </div>
            </div>
        </div>
    );
};