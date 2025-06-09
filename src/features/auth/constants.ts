import { TAuthData } from './types';

export enum AuthType {
  LOGIN = 'login',
  REGISTER = 'register'
}

export enum FormTabs {
  STUDENT = 'Как ученик',
  TUTOR = 'Как репетитор'
}

export const defaultValues: TAuthData = {
  authType: AuthType.REGISTER,
  role: FormTabs.STUDENT,
  name: '',
  tg: '',
  link: '',
  code: ''
};
