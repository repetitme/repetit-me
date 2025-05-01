import React, { useCallback, useEffect } from 'react';
import closeIcon from '../../../assets/icons/close.png';
import { ModalOverlay } from '../Overlay';

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
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  const popupContent = {
    request: {
      title: 'По вашему запросу репетиторы не найдены',
      text: 'Вы можете оставить заявку, и мы поищем репетитора под ваш запрос в нашей дополнительной базе. Отправить заявку?',
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет',
      variant: 'white'
    },
    notFound: {
      title: 'Вы откликнулись!',
      text: 'Отклик отправлен успешно! Когда преподаватель примет заявку, мы обменяемся с Вами контактами в Telegram, уведомление придёт автоматически через бота. Отменить или посмотреть статус заявки можно в разделе «Мои заявки».',
      confirmButtonText: 'Мои заявки',
      cancelButtonText: null,
      variant: 'purple'
    }
  };

  const { title, text, confirmButtonText, cancelButtonText } =
    popupContent[variant];

  return (
    <>
      <div className={styles.popup}>
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
                className={`${styles.popup__button} ${styles[`popup_variant_${popupContent[variant].variant}`]}`}
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
