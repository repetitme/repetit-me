import { FC } from 'react';

import classNames from 'classnames';

import { Modal } from '../../shared/components/Modal';

import styles from './index.module.scss';

import { ModalNotificationProps } from './types';

export const NotificationModal: FC<ModalNotificationProps> = ({
  type,
  title,
  text,
  onClose,
  onAccept,
  onDecline
}) => {
  switch (type) {
    case 'notification':
      return (
        <Modal
          onClose={onClose}
          type={type}
          dataButton={[
            {
              text: 'Мои репетиторы',
              variant: 'purple',
              onClick: onAccept,
              className: styles.button__big
            }
          ]}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
          </div>
        </Modal>
      );

    case 'accept_without_text':
      return (
        <Modal
          onClose={onClose}
          type={type}
          dataButton={[
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
          ]}
        >
          <h1 className={classNames(styles.title, styles.title__only)}>
            {title}
          </h1>
        </Modal>
      );

    case 'accept_with_text':
      return (
        <Modal
          onClose={onClose}
          type={type}
          dataButton={[
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
          ]}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
          </div>
        </Modal>
      );
  }
};
