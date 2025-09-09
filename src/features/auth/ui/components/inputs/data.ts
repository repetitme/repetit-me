import { TAuthInputInterface, TInputData } from './types';

export const authInputsData: TInputData = {
  name: [
    'name',
    'Введите имя',
    'Имя',
    'Поле может содержать только кириллические буквы, пробелы и дефисы',
    '^[А-ЯЁа-яё]+(?:[ \\-][А-ЯЁа-яё]+)* ?$'
  ],
  tg: [
    'tg',
    '@aleksandr',
    'Никнейм в Telegram',
    'Никнейм должен состоять из латинских букв',
    '^[a-zA-Z0-9_@]+$'
  ],

  link: [
    'link',
    'https://...',
    'Реферальная ссылка (при наличии)',
    'Некорректный формат ссылки',
    '^https://.+'
  ],
  code: [
    'code',
    'Введите шестизначное число',
    'Код',
    'Введите шестизначный код',
    '^\\d{6}$'
  ]
};

export const requiredErrorMessage: Partial<
  Record<TAuthInputInterface['name'], string>
> = {
  name: 'Пожалуйста, укажите имя',
  tg: 'Пожалуйста, укажите никнейм',
  code: 'Пожалуйста, введите шестизначный код'
};
