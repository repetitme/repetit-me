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

export type TRadio = { title: string; items: string[] };

export type TCheckbox = { title: string; items: string[]; index?: number };
