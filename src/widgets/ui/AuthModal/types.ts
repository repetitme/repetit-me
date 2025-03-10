import { ReactNode } from 'react';

export type AuthModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};
