export interface IAboutProfile {
  studentInfo: studentInfoType;
}

export type studentInfoType = {
  name: string;
  lessonsAmount: number;
  debt?: number;
  price: string;
  addInfo?: string;
  isLessonStarted: boolean;
  subjectTag: string[];
  gradeTag: string[];
  preparationsTag: string[];
};
