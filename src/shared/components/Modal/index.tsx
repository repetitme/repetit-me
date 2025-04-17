import { FC } from 'react';

import classNames from 'classnames';

import closeIconWhite from '../../../assets/icons/closeWhiteIcon.svg';
import Button from '../../button';
import useClickOutside from '../../hooks/useClickOutside';
import { ModalOverlay } from '../Overlay';

import styles from './index.module.scss';

import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({
  type,
  children,
  onClose,
  dataButton
}) => {
  const modalRef = useClickOutside(onClose);
  return (
    <>
      <div className={styles.modal__wrapper}>
        <div
          ref={modalRef}
          className={classNames(styles.modal, {
            [styles.modal__accept]: type === 'accept_without_text'
          })}
          onClick={(e) => e.stopPropagation()}
        >
          <div>{children}</div>
          {dataButton && (
            <div
              className={classNames(styles.modal__button, {
                [styles.modal__buttons]:
                  type === 'accept_without_text' || type === 'accept_with_text'
              })}
            >
              {dataButton.map((data, index) => (
                <Button key={index} {...data} />
              ))}
            </div>
          )}

          {(type === 'notification' || type === 'accept_with_text') && (
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
