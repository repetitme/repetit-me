import { FC } from 'react';

import classNames from 'classnames';

import closeIconWhite from '../../../assets/icons/closeWhiteIcon.svg';
import Button from '../../button';
import useClickOutside from '../../hooks/useClickOutside';
import { ModalOverlay } from '../Overlay';

import styles from './index.module.scss';

import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({
  variant,
  children,
  onClose,
  dataButton
}) => {
  const isAcceptWithoutText = variant === 'accept_without_text';
  const isAcceptWithText = variant === 'accept_with_text';
  const isNotification = variant === 'notification';

  const showCloseIcon = isNotification || isAcceptWithText;
  const showTwoButton = isAcceptWithText || isAcceptWithoutText;

  const modalRef = useClickOutside(onClose);
  return (
    <>
      <div
        className={styles.modal__wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={modalRef}
          className={classNames(styles.modal, {
            [styles.modal__accept]: isAcceptWithoutText
          })}
        >
          <div>{children}</div>
          {dataButton && (
            <div
              className={classNames(styles.modal__button, {
                [styles.modal__buttons]: showTwoButton
              })}
            >
              {dataButton.map((data, index) => (
                <Button key={index} {...data} />
              ))}
            </div>
          )}

          {showCloseIcon && (
            <button onClick={onClose} className={styles.modal__close}>
              <img
                src={closeIconWhite}
                alt="иконка закрытия модального окна уведомления"
              />
            </button>
          )}
        </div>
      </div>
      <ModalOverlay />
    </>
  );
};
