import { v4 as uuidv4 } from 'uuid';

import { IDisciplines } from './type';

import ivanova from '../../assets/images/tutor-ivanova.svg';
import fedorova from '../../assets/images/tutor-fedorova.svg';
import glazkov from '../../assets/images/tutor-glazkov.svg';


export const tutorsCard: string[] = [
  glazkov,
  ivanova,
  fedorova,
  glazkov,
  fedorova
];

export const disciplines: IDisciplines[] = [
  {
    id: uuidv4(),
    other: false,
    discipline: 'Математика'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Информатика'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Русский язык'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Литература'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Биология'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Физика'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Химия'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Английский язык'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'История'
  },
  {
    id: uuidv4(),
    other: false,
    discipline: 'Еще'
  }
];

export const dropdown: IDisciplines[] = [
  {
    id: uuidv4(),
    other: true,
    discipline: 'Обществознание'
  },
  {
    id: uuidv4(),
    other: true,
    discipline: 'Алгебра'
  },
  {
    id: uuidv4(),
    other: true,
    discipline: 'Геометрия'
  },
  {
    id: uuidv4(),
    other: true,
    discipline: 'Немецкий язык'
  },
  {
    id: uuidv4(),
    other: true,
    discipline: 'Экономика'
  }
];
