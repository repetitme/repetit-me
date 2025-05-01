export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'request' | 'notFound';
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  onConfirm?: () => void;
}
