import { v4 as uuidv4 } from 'uuid';

export interface TFeatures {
  id: string;
  feature: string;
}

export const features: TFeatures[] = [
  {
    id: uuidv4(),
    feature: 'Молодой преподаватель'
  },
  {
    id: uuidv4(),
    feature: 'Математика'
  },
  {
    id: uuidv4(),
    feature: 'ОГЭ'
  },
  {
    id: uuidv4(),
    feature: 'Линейные уравнения'
  },
  {
    id: uuidv4(),
    feature: 'Нужна еще помощь с домашкой'
  },
  {
    id: uuidv4(),
    feature: 'Гибкий график'
  },
  {
    id: uuidv4(),
    feature: 'Готов много заниматься'
  },
  {
    id: uuidv4(),
    feature: 'Хромает геометрия'
  },
  {
    id: uuidv4(),
    feature: 'Люблю пошутить'
  },
  {
    id: uuidv4(),
    feature: 'Подготовка к экзамену'
  },
  {
    id: uuidv4(),
    feature: 'Цена не так важна'
  },
  {
    id: uuidv4(),
    feature: 'Алгебра'
  },
  {
    id: uuidv4(),
    feature: 'Геометрия'
  },
  {
    id: uuidv4(),
    feature: 'Еще нужна информатика'
  },
  {
    id: uuidv4(),
    feature: 'Python на начальном уровне'
  },
  {
    id: uuidv4(),
    feature: 'ВПР'
  }
];
