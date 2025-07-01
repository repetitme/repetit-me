import cn from 'classnames';

import styles from './index.module.scss';

import { ModalOverlayProps } from './type';

export const ModalOverlay = ({ onClose, isOpen }: ModalOverlayProps) => (
  <div
    className={cn(styles.overlay, { [styles.active]: isOpen })}
    onClick={onClose}
  />
);
