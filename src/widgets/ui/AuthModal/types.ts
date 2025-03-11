import { ReactNode } from 'react';

export type AuthModalProps = {
  type: boolean;
  children: ReactNode;
  toLogin: () => void;
  onClose: () => void;
};
