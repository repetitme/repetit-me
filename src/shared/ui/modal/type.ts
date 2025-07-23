export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  haveCloseIcon?: boolean;
};
