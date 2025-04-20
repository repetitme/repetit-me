export interface TutorFiltersProps {
  onSubmit: (values: TState) => void;
  percentage?: number;
}

export type TButton = {
  reset?: boolean;
  onClick?: () => void;
};

type titles =
  | 'Предметы'
  | 'Школьные предметы'
  | 'Иностранные языки'
  | 'Логопедия'
  | 'Другие репетиторы'
  | 'Цели'
  | 'Возрастная категория'
  | 'Цена'
  | 'Стаж преподавания'
  | 'Пол репетитора'
  | 'Рейтинг'
  | 'Другое';

export type TTitles = Record<string, titles>;

export type TState = Record<string, string[]>;

export type TData = string[];

export type TAccordionGroup = { title: string; items: string[] }[];

export type TRadio = {
  title: string;
  items: string[];
  values: TState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TCheckbox = {
  title?: string;
  items?: string[];
  index?: number;
  values: TData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TAccordions = {
  data: TAccordionGroup;
  isOpen: boolean[];
  toggleAccordion: (index: number) => void;
  titles: TTitles;
  Checkbox: ({
    title,
    items,
    index,
    values,
    handleChange
  }: TCheckbox) => React.JSX.Element;
  values: TState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TPrices = {
  title: string;
  sliderValues: number[];
  handleSliderChange: (value: number | number[]) => void;
  errorMessage: string;
  values: TState;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};
