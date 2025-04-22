import { ReactNode } from 'react';

import { ButtonProps } from '../../button/type';

export type ModalProps = {
  variant: 'notification' | 'accept_without_text' | 'accept_with_text';
  children: ReactNode;
  onClose: () => void;
  dataButton: ButtonProps[] | null;
};
