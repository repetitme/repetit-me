import { ReactNode } from 'react';

export type AuthModalProps = {
  type: boolean;
  onClose: () => void;
  onToggle: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
};