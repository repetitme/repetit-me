import { ITutorCard } from './type';
import { IDisciplines } from './type';

import Glazkov from '../../assets/img/tutor-Glazkov.png';
import Fedorova from '../../assets/img/tutor-Fedorova.png';
import Ivanova from '../../assets/img/tutor-Ivanova.png';

export const tutorsCard: ITutorCard[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    rating: 4.8,
    avatar: Fedorova,
    name: 'Екатерина',
    surname: 'Фёдорова',
    type_tutor: 'Частный преподаватель',
    experience: 10,
    about:
      ' Меня зовут Елена, с радостью помогу вам в изучении иностранных языков. ',
    price: 1200,
    disciplines: ['Английский язык'],
    classes: ['5-8 класс', '9-11 класс'],
    targets: ['Повышение успеваемости']
  }
];

export const disciplines: IDisciplines[] = [
  {
    id: 1,
    discipline: 'Математика'
  },
  {
    id: 2,
    discipline: 'Информатика'
  },
  {
    id: 3,
    discipline: 'Русский язык'
  },
  {
    id: 4,
    discipline: 'Литература'
  },
  {
    id: 5,
    discipline: 'Биология'
  },
  {
    id: 6,
    discipline: 'Физика'
  },
  {
    id: 7,
    discipline: 'Химия'
  },
  {
    id: 8,
    discipline: 'Английский язык'
  },
  {
    id: 9,
    discipline: 'История'
  },
  {
    id: 10,
    discipline: 'Обществознание'
  },
  {
    id: 11,
    discipline: 'Алгебра'
  },
  {
    id: 12,
    discipline: 'Геометрия'
  },
  {
    id: 13,
    discipline: 'Немецкий язык'
  },
  {
    id: 14,
    discipline: 'Экономика'
  }
];
