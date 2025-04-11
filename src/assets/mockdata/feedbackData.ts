import { TFeedbackProps } from '../../shared/FeedbackItem/type';
import Evgeny from '../images/FeedbackStudentImg/Evgeny.png';
import Pavel from '../images/FeedbackStudentImg/Pavel.png';
import Sergey1 from '../images/FeedbackStudentImg/Sergey1.png';
import Sergey2 from '../images/FeedbackStudentImg/Sergey2.png';

export const feedbackData: TFeedbackProps[] = [
  {
    id: 1,
    name: 'Sergey',
    image: Sergey1,
    content:
      'Хороший репетитор, понятно объясняет, контролирует и организует самостоятельную работу ребёнка. Улучшилась успеваемость по математике в школе',
    rating: 4,
    date: new Date('2024-09-20')
  },
  {
    id: 2,
    name: 'Evgeny',
    image: Evgeny,
    content:
      'Отличный репетитор! Помог понять сложные темы, всегда терпелив и объясняет доступно. Улучшились мои оценки! Спасибо!',
    rating: 5,
    date: new Date('2024-08-20')
  },
  {
    id: 3,
    name: 'Pavel',
    image: Pavel,
    content:
      'Замечательный репетитор! Объясняет сложные темы просто и понятно. С его помощью математика стала интереснее! Советую всем.',
    rating: 3,
    date: new Date('2024-08-20')
  },
  {
    id: 4,
    name: 'Sergey',
    image: Sergey2,
    content:
      'Хороший репетитор, понятно объясняет, контролирует и организует самостоятельную работу ребёнка. Улучшилась успеваемость по математике в школе',
    rating: 4,
    date: new Date('2024-09-20')
  }
];
