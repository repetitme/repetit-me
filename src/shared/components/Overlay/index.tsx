import styles from './index.module.scss';

export const ModalOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className={styles.overlay} onClick={onClose} />
);
