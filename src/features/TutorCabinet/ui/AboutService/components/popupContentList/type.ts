export interface IPopupContentList {
  onListChange?: (items: React.ReactNode[]) => void;
  onErrorChange?: (hasError: boolean) => void;
}
