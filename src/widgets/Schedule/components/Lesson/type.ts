export interface ILesson {
  date: string;
  subject: string;
  children: React.ReactNode;
  alternate?: boolean;
}
