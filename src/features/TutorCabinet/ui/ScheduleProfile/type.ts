export interface IScheduleProfile {
  firstLessons: LessonType[];
  scheduleLessons: LessonType[];
}

export type LessonType = {
  date: string;
  subject: string;
  studentName: string;
  lessonNumber?: number;
};
