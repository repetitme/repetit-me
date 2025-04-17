import { v4 as uuidv4 } from 'uuid'
import studentIcon from '../../assets/images/studentIcon.svg'
import { TFeedbackItemProps } from '../../shared/components/FeedbackItem/type'

export const feedbackData: TFeedbackItemProps[] = [
  {
    id: uuidv4(),
    name: 'Sergey',
    image: studentIcon,
    content:
      'Хороший репетитор, понятно объясняет, контролирует и организует самостоятельную работу ребёнка. Улучшилась успеваемость по математике в школе',
    rating: 4,
    date: new Date('2024-09-20')
  },
  {
    id: uuidv4(),
    name: 'Evgeny',
    image: studentIcon,
    content:
      'Отличный репетитор! Помог понять сложные темы, всегда терпелив и объясняет доступно. Улучшились мои оценки! Спасибо!',
    rating: 5,
    date: new Date('2024-08-20')
  },
  {
    id: uuidv4(),
    name: 'Pavel',
    image: studentIcon,
    content:
      'Замечательный репетитор! Объясняет сложные темы просто и понятно. С его помощью математика стала интереснее! Советую всем.',
    rating: 3,
    date: new Date('2024-08-20')
  },
  {
    id: uuidv4(),
    name: 'Sergey',
    image: studentIcon,
    content:
      'Хороший репетитор, понятно объясняет, контролирует и организует самостоятельную работу ребёнка. Улучшилась успеваемость по математике в школе',
    rating: 4,
    date: new Date('2024-09-20')
  }
];
