export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  confirmButtonText?: string;
  cancelButtonText?: string; 
  onConfirm?: () => void; 
  variant?: 'default' | 'white' | 'purple';
  showCancelButton?: boolean;
  showCloseButton?: boolean;
}
