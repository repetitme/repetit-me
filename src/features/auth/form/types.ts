export type TLogin = {
  login: boolean;
};

export type TFormTabs = 'Как ученик' | 'Как репетитор';

export type TInputProps = {
  values: Record<string, string>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};