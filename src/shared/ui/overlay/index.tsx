import cn from 'classnames';

import styles from './index.module.scss';

import { ModalOverlayProps } from './type';

const ModalOverlay = ({ onClose, isOpen = true }: ModalOverlayProps) => (
  <div
    className={cn(styles.overlay, { [styles.active]: isOpen })}
    onClick={onClose}
  />
);

export default ModalOverlay;
