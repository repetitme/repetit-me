export interface IScheduleProfile {
  firstLessons: firstLessonType[];
  scheduleLessons: scheduleLessonType[];
}

export type firstLessonType = {
  date: string;
  subject: string;
  studentName: string;
  color: 'pink' | 'purple';
};

export type scheduleLessonType = {
  date: string;
  subject: string;
  studentName: string;
  color: 'pink' | 'purple';
  lessonNumber: number;
};
