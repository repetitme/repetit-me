import { firstLessonType, scheduleLessonType } from './type';

export const firstLessonsData: firstLessonType[] = [
  {
    date: '24.07 11:35',
    subject: 'Математика',
    studentName: 'Виталий',
    color: 'purple'
  },
  {
    date: '25.07 11:35',
    subject: 'Английский язык',
    studentName: 'Евгений',
    color: 'pink'
  },
  {
    date: '27.07 13:30',
    subject: 'Математика',
    studentName: 'Виталий',
    color: 'purple'
  }
];

export const scheduleLessonsData: scheduleLessonType[] = [
  {
    date: '24.07 11:35',
    subject: 'Математика',
    studentName: 'Виталий',
    color: 'purple',
    lessonNumber: 2
  },
  {
    date: '25.07 11:35',
    subject: 'Английский язык',
    studentName: 'Евгений',
    color: 'pink',
    lessonNumber: 2
  },
  {
    date: '27.07 13:30',
    subject: 'Математика',
    studentName: 'Виталий',
    color: 'purple',
    lessonNumber: 3
  }
];
