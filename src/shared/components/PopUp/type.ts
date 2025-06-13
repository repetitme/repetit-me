export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'notFound' | 'responseSent' | 'cancelRequest' | 'acceptRequest' | 'rejectRequest';
  showCancelButton?: boolean;
  onConfirm?: () => void;
}

export interface PopupData {
  title: string;
  text?: string | null;
  confirmButtonText: string;
  cancelButtonText?: string | null;
  color?: string;
}