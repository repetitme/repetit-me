import { ServicesListItem } from '../../widgets/AboutMe/type';

export interface IFreeTime {
  day: string;
  time: string[];
}

export interface IUserBaseData {
  id: string;
  name: string;
  image: string;
  subjects: string[]; // Массив предметов
  studentAudience: string[]; // Для какой аудиторий учеников
  purpose: string[]; // Для чего нужен преподаватель
  price: string;
}

export interface ITutorData extends IUserBaseData {
  status: 'Частный преподаватель' | string;
  experienceYears: number;
  description: string;
  autobiography: string;
  rating: number; // Рейтинг
  link?: string; // Ссылка на приветственное видео от репетитора, если оно у него есть
  isCard?: boolean;
  servicesList: ServicesListItem[];
  documents: string[];
  videoStart: string;
  freeTime: IFreeTime[];

}

export interface IStudentData extends IUserBaseData {
  importantInfo?: number; // Информация о задолженностях, выделенное акцентным цветом
  additionalInfo: string; // Дополнительная информация
  activityStatus: number; // Например, "2" часа назад
  lessonsCompleted?: number; // Кол-во завершенный лекций с репетитором у студента
  workingStatus?: string; // Например, "занятия еще не начались"
}

export type TUserRole = 'student' | 'teacher' | 'unauth' | 'card';

export interface IUserData {
  role: TUserRole;
  tutorData?: ITutorData;
  studentData?: IStudentData;
  handleSubmit?: boolean; // !!! Временный пропс, его наличие предполагает, что сабмит по заявке репетитору от ученика отправлен. Его видит репетитор и ученик у себя
}
