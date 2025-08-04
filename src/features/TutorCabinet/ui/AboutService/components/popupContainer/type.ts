export interface IPopupContainer {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  popupTitle: string;
  buttonTitle: string;
  isDisabled?: boolean;
  URL?: string;
}
