import { ReactNode } from "react";

export interface IModalProps {
  onClose: () => void,
  children: ReactNode
}
