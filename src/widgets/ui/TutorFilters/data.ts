import { TAccordionGroup, TData, TState, TTitles } from './types';

export const titles: TTitles = {
  subjects: 'Предметы',
  schoolSubjects: 'Школьные предметы',
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

export const subjects: TData = [
  'Все',
  'Математика',
  'Русский язык',
  'Физика',
  'Биология',
  'Химия',
  'Литература',
  'Обществознание',
  'Окружающий мир',
  'География',
  'История'
];

export const foreignLanguages: TData = [
  'Английский',
  'Немецкий',
  'Французский',
  'Испанский',
  'Итальянский',
  'Китайский',
  'Японский',
  'Португальский',
  'Сербский',
  'Турецкий',
  'Корейский',
  'Русский для иностранцев',
  'Азербайджанский',
  'Финский',
  'Арабский'
];

export const speechTherapy: TData = ['Детский логопед', 'Взрослый логопед'];

export const others: TData = [
  'Подготовка к школе',
  'Начальная школа',
  'Компьютерная грамотность',
  'Финансовая грамотность'
];

export const accordionGroups: TAccordionGroup = [
  { title: titles.schoolSubjects, items: subjects },
  {
    title: titles.foreignLanguage,
    items: foreignLanguages
  },
  { title: titles.speechTherapy, items: speechTherapy },
  { title: titles.others, items: others }
];

export const goals: TData = [
  'Подготовка к ВПР',
  'Подготовка к ОГЭ',
  'Подготовка к ЕГЭ',
  'Подготовка к олимпиаде',
  'Повышение успеваемости',
  'Подготовка к экзамену'
];

export const ageBrackets: TData = [
  'Все',
  'Дошкольник',
  '1-4 класс',
  '5-8 класс',
  '9-11 класс',
  'Студент',
  'Взрослый'
];

export const experience: TData = [
  'до года',
  '1-5 лет',
  '5-10 лет',
  'Более 10 лет'
];

export const gender: TData = ['Все', 'Мужчина', 'Женщина'];

export const rating: TData = ['Все', 'Высокий', 'Средний', 'Низкий'];

export const option: TData = ['c видеопрезентацией'];

export const defaultState: TState = {
  [titles.subjects]: [],
  [titles.foreignLanguage]: [],
  [titles.speechTherapy]: [],
  [titles.others]: [],
  [titles.goals]: [],
  [titles.ageBrackets]: [ageBrackets[0]],
  [titles.price]: ['1 500 ₽', '2 000 ₽'],
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
