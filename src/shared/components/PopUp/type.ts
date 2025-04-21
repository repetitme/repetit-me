export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  confirmButtonText?: string;
  cancelButtonText?: string; // Текст кнопки отмены
  onConfirm?: () => void; // Обработчик подтверждения
  variant?: 'default' | 'white' | 'purple';
  showCancelButton?: boolean;
}
