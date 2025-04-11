import styles from './index.module.scss';

import { ModalOverlayProps } from './types';

export const ModalOverlay = ({ onClose }: ModalOverlayProps) => (
  <div className={styles.overlay} onClick={onClose} />
);
