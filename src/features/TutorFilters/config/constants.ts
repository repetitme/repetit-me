import {
  ageBrackets,
  foreignLanguages,
  gender,
  others,
  speechTherapy,
  subjects
} from './data';

import { TAccordionGroup, TState, TTitles } from '../types/types';

export const titles: TTitles = {
  subjects: 'Школьные предметы',
  foreignLanguage: 'Иностранные языки',
  speechTherapy: 'Логопедия',
  others: 'Другие репетиторы',
  goals: 'Цели',
  ageBrackets: 'Возрастная категория',
  price: 'Цена',
  experience: 'Стаж преподавания',
  gender: 'Пол репетитора',
  rating: 'Рейтинг',
  option: 'Другое'
};

export const defaultState: TState = {
  [titles.subjects]: [],
  [titles.foreignLanguage]: [],
  [titles.speechTherapy]: [],
  [titles.others]: [],
  [titles.goals]: [],
  [titles.ageBrackets]: [ageBrackets[0]],
  [titles.price]: ['1 500 ₽', '5 000 ₽'],
  [titles.experience]: [],
  [titles.gender]: [gender[0]],
  [titles.rating]: [],
  [titles.option]: []
};

export const errorMessages: Record<string, string> = {
  min: 'Минимальная цена не может быть больше максимальной',
  max: 'Максимальная цена не может быть меньше минимальной',
  required: 'Поля обязательны для заполнения'
};

export const accordionGroups: TAccordionGroup = [
  { title: titles.subjects, items: subjects },
  {
    title: titles.foreignLanguage,
    items: foreignLanguages
  },
  { title: titles.speechTherapy, items: speechTherapy },
  { title: titles.others, items: others }
];
