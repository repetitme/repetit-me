import { IDisciplines } from '../QuickSelection/type';

export interface IDropdownProps {
  list: IDisciplines[];
  stateMore: boolean;
  setStateOption: (stateOption: string) => void;
  setStateMore: (stateMore: boolean) => void;
  setStateItemOther: (stateItemOther: boolean) => void;
}
