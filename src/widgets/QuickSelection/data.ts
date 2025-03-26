import { v4 as uuidv4 } from 'uuid';

import { ITutorCard } from './type';
import { IDisciplines } from './type';

import Glazkov from '../../assets/img/tutor-Glazkov.png';
import Fedorova from '../../assets/img/tutor-Fedorova.png';
import Ivanova from '../../assets/img/tutor-Ivanova.png';

export const tutorsCard: ITutorCard[] = [
  {
    id: uuidv4(),
    rating: 4.8,
    avatar: Glazkov,
    name: 'Даниил',
    surname: 'Глазков',
    type_tutor: 'Частный преподаватель',
    experience: 10,
    about: 'Меня зовут Даниил, преподаю на протяжении 10 лет.',
    price: 1200,
    disciplines: ['Физика'],
    classes: ['5-8 класс', '9-11 класс'],
    targets: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    rating: 4.8,
    avatar: Ivanova,
    name: 'Елена',
    surname: 'Иванова',
    type_tutor: 'Частный преподаватель',
    experience: 10,
    about:
      'Меня зовут Елена, с радостью помогу вам в изучении иностранных языков.',
    price: 1200,
    disciplines: ['Английский язык'],
    classes: ['5-8 класс', '9-11 класс'],
    targets: ['Подготовка к ЕГЭ']
  },
  {
    id: uuidv4(),
    rating: 4.8,
    avatar: Fedorova,
    name: 'Екатерина',
    surname: 'Фёдорова',
    type_tutor: 'Частный преподаватель',
    experience: 10,
    about:
      ' Меня зовут Елена, с радостью помогу вам в изучении иностранных языков.',
    price: 1200,
    disciplines: ['Английский язык'],
    classes: ['5-8 класс', '9-11 класс'],
    targets: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    rating: 4.8,
    avatar: Fedorova,
    name: 'Елена',
    surname: 'Иванова',
    type_tutor: 'Частный преподаватель',
    experience: 10,
    about: ' Меня зовут Елена, я пример четвертой карточки. ',
    price: 1200,
    disciplines: ['Английский язык'],
    classes: ['5-8 класс', '9-11 класс'],
    targets: ['Повышение успеваемости']
  }
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
