import { FC } from 'react';

import classNames from 'classnames';

import { Modal } from '../../shared/components/Modal';

import styles from './index.module.scss';

import { ModalProps } from '../../shared/components/Modal/types';
import { ModalNotificationProps } from './types';

enum notificationType {
  NOTIFICATION = 'notification',
  ACCEPT_TEXT = 'accept_with_text',
  ACCEPT = 'accept_without_text'
}

export const NotificationModal: FC<ModalNotificationProps> = ({
  notification,
  textButton,
  title,
  text,
  onClose,
  onAccept,
  onDecline
}) => {
  const baseProps: Pick<ModalProps, 'dataButton' | 'onClose'> = {
    dataButton: [
      {
        text: 'Нет',
        variant: 'white',
        onClick: onDecline,
        className: styles.button__small
      },
      {
        text: 'Да',
        variant: 'white',
        onClick: onAccept,
        className: styles.button__small
      }
    ],
    onClose
  };
  return (
    <>
      {notification && (
        <Modal
          onClose={onClose}
          variant={notificationType.NOTIFICATION}
          dataButton={[
            {
              text: textButton,
              variant: 'purple',
              onClick: onAccept,
              className: styles.button__big
            }
          ]}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </Modal>
      )}
      {!notification && text && (
        <Modal variant={notificationType.ACCEPT_TEXT} {...baseProps}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </Modal>
      )}
      {!notification && !text && (
        <Modal variant={notificationType.ACCEPT} {...baseProps}>
          <h2 className={classNames(styles.title, styles.title__only)}>
            {title}
          </h2>
        </Modal>
      )}
    </>
  );
};
