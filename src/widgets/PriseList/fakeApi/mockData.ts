import { v4 as uuidv4 } from 'uuid';

import { ITutorPriseListData } from '../type';

export const mockTutorsPriseList: ITutorPriseListData[] = [
  {
    id: uuidv4(),
    discipline: 'Информатика',
    target: 'для себя',
    price: 1200
  },
  {
    id: uuidv4(),
    discipline: 'Математика',
    target: '1-4 класс',
    price: 1500
  },
  {
    id: uuidv4(),
    discipline: 'Русский язык',
    target: 'подготовка к ЕГЭ',
    price: 4000
  },
  {
    id: uuidv4(),
    discipline: 'Информатика',
    target: 'для себя',
    price: 5000
  },
  {
    id: uuidv4(),
    discipline: 'Математика',
    target: '1-4 класс',
    price: 6000
  },
  {
    id: uuidv4(),
    discipline: 'Русский язык',
    target: 'подготовка к ЕГЭ',
    price: 7000
  }
];
