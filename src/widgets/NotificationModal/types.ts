export type ModalNotificationProps = {
  title: string;
  text?: string;
  textButton: string;
  onClose: () => void;
  onAccept?: () => void;
  onDecline?: () => void;
  notification: boolean;
};
