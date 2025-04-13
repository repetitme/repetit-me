import { ReactNode } from 'react';

export type AuthModalProps = {
  type: boolean;
  onClose: () => void;
  onToggle: () => void;
  children: ReactNode;
};
