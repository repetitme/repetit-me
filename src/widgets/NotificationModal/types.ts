export type ModalNotificationProps = {
  title: string;
  text?: string;
  onClose: () => void;
  onAccept?: () => void;
  onDecline?: () => void;
  type: 'notification' | 'accept_without_text' | 'accept_with_text';
};
