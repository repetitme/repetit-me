export type TLogin = {
  login: boolean;
  closeModal: () => void;
};

export type TFormTabs = 'Как ученик' | 'Как репетитор';

export type TAuthType = 'login' | 'register';

export type TAuthData = {
  authType: TAuthType;
  role: TFormTabs;
  name: string;
  tg: string;
  link: string;
  code: string;
};

export type TInputProps = {
  values: Record<string, string>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
