import { TAccordionGroup } from '../../../types/types';

export type TCheckboxProps = {
  title: string;
  items: string[];
  index: number;
  isInAccordion: boolean;
  values: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TAccordions = {
  data: TAccordionGroup;
  isOpen: boolean[];
  toggleAccordion: (index: number) => void;
  Checkbox: (props: TCheckboxProps) => React.JSX.Element;
  values: Record<string, string[]>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
