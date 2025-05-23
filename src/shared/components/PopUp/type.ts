export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'request' | 'notFound';
  showCancelButton?: boolean;
  onConfirm?: () => void;
}
