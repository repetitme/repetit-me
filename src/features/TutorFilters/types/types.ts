export interface TutorFiltersProps {
  onSubmit: (values: TState) => void;
  noResultsFound?: boolean;
  percentage?: number;
  onToggleTooltip?: () => void;
  onReset: (values: TState) => void;
}

export type TUseTutorFilters = {
  onSubmit: (values: TState) => void;
  onReset: (values: TState) => void;
};

export type TButton = {
  reset?: boolean;
};

export type TAccordionGroup = { title: string; items: string[] }[];

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
