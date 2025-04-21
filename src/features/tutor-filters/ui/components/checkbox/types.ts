import { TData } from '../../../types';

export type TCheckbox = {
  title?: string;
  items?: string[];
  index?: number;
  isInAccordion?: boolean;
  values: TData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
