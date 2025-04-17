import { ReactNode } from 'react';

import { ButtonProps } from '../Button/type';

export type ModalProps = {
  type: 'notification' | 'accept_without_text' | 'accept_with_text';
  children: ReactNode;
  onClose: () => void;
  dataButton: ButtonProps[] | null;
};
