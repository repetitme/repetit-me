export type TLogin = {
  login: boolean;
};

export type TFormTabs = boolean;

export type TInputProps = {
  values: Record<string, string>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};