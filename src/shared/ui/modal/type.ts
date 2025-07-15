import { ReactNode } from 'react';

export type ModalProps = {
  haveCloseIcon: boolean;
  children: ReactNode;
  onClose: () => void;
};
