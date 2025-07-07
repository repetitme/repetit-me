import { TData } from '../../../types/types';

export type TCheckbox = {
  title?: string;
  items?: string[];
  index?: number;
  isInAccordion?: boolean;
  values: TData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
