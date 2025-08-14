import { v4 as uuidv4 } from 'uuid';

import fedorova from '../../assets/images/tutor-fedorova.svg';
import glazkov from '../../assets/images/tutor-glazkov.svg';
import ivanova from '../../assets/images/tutor-ivanova.svg';

import { IDisciplines } from './type';

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
    discipline: 'Математика'
  },
  {
    id: uuidv4(),
    discipline: 'Информатика'
  },
  {
    id: uuidv4(),
    discipline: 'Русский язык'
  },
  {
    id: uuidv4(),
    discipline: 'Литература'
  },
  {
    id: uuidv4(),
    discipline: 'Биология'
  },
  {
    id: uuidv4(),
    discipline: 'Физика'
  },
  {
    id: uuidv4(),
    discipline: 'Химия'
  },
  {
    id: uuidv4(),
    discipline: 'Английский язык'
  },
  {
    id: uuidv4(),
    discipline: 'История'
  },
  {
    id: uuidv4(),
    discipline: 'Еще'
  }
];

export const dropdown: IDisciplines[] = [
  {
    id: uuidv4(),
    discipline: 'Обществознание'
  },
  {
    id: uuidv4(),
    discipline: 'Алгебра'
  },
  {
    id: uuidv4(),
    discipline: 'Геометрия'
  },
  {
    id: uuidv4(),
    discipline: 'Немецкий язык'
  },
  {
    id: uuidv4(),
    discipline: 'Экономика'
  }
];
