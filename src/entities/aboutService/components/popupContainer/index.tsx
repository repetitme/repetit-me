import { useEffect, useRef } from 'react';

import closeIcon from '../../../../assets/icons/close.svg';
import Button from '../../../../shared/ui/button';
import { ModalOverlay } from '../../../../shared/ui/overlay';

import styles from './index.module.scss';

import { IPopupContainer } from './type';

export const PopupContainer: React.FC<IPopupContainer> = ({
  isOpen,
  onClose,
  children,
  popupTitle,
  buttonTitle,
  isDisabled,
  URL
}) => {
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
    <>
      <ModalOverlay onClose={onClose}></ModalOverlay>
      <div className={styles.popup} ref={popupRef}>
        <div className={styles.popup__close}>
          <button className={styles.popup__close_button} onClick={onClose}>
            <img
              className={styles.popup__close_image}
              src={closeIcon}
              alt="Закрыть"
            ></img>
          </button>
        </div>
        <div className={styles.popup__container}>
          <p className={styles.popup__title}>{popupTitle}</p>
          <div className={styles.popup__content}>{children}</div>
          <Button
            text={buttonTitle}
            variant="purple"
            className={styles.popup__button}
            disabled={isDisabled}
            href={URL}
          ></Button>
        </div>
      </div>
    </>
  );
};
