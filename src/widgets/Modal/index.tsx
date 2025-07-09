import { FC, ReactNode } from 'react';

import iconClose from '../../assets/icons/closeIcon.svg';
import ModalOverlay from '../../shared/ui/overlay';

import styles from './index.module.scss';

type TModal = {
  children: ReactNode;
  onToggleModalState: () => void;
  openModalState?: boolean;
};

export const Modal: FC<TModal> = ({
  children,
  onToggleModalState,
  openModalState
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        {children}
        <img
          className={styles.container__content_close}
          src={iconClose}
          alt="Закрыть окно"
          onClick={onToggleModalState}
        />
      </div>
      <ModalOverlay onClose={onToggleModalState} isOpen={openModalState} />
    </div>
  );
};

export default Modal;
