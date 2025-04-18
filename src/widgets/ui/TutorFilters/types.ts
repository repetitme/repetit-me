export interface TutorFiltersProps {
  onSubmit: (values: TState) => void;
  percentage?: number;
}

export type TButton = {
  reset?: boolean;
  onClick?: () => void;
};

export type TState = {
  [key: string]: string[];
};
