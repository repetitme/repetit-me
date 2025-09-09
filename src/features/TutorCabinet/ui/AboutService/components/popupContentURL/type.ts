export interface IPopupContentURL {
  inputName: string;
  url: string;
  readOnly: boolean;
  key?: number;
  onErrorChange?: (error: string) => void;
}
