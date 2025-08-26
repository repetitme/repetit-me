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
  status: string;
  experienceYears: number;
  description: string;
  autobiography: string;
  rating: number; // Рейтинг
  linkRef?: string; // Ссылка на реферальную ссылку, если она есть
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

export enum navOptionsStudent {
  myList = 'Мои репетиторы',
  myRequests = 'Заявки',
  requests = 'Запросы'
}

export enum navOptionsTutor {
  myList = 'Мои ученики',
  myRequests = 'Заявки',
  requests = 'Запросы'
}

export const navOptions = {
  student: navOptionsStudent,
  tutor: navOptionsTutor
};

export interface IStudentProfile extends IStudentData {
  requests: {
    [key in navOptionsStudent]: { ids: string[] }; // Массив id репетиторов в профиле ученика
  };
  createdRequest: {
    id: string;
    request: {
      [key: string]: string | string[];
    };
  };
}

export interface ITutorProfile {
  id: string;
  name: string;
  image: string;
  experienceYears: number;
  description: string;
  price: string;
  subjects: string[]; // Массив предметов
  studentAudience: string[]; // Для какой аудиторий учеников
  purpose: string[]; // Для чего нужен преподаватель
  rating: number; // Рейтинг
  status: string;
  requests: {
    [key in navOptionsTutor]: { ids: string[] }; // Массив id учеников в профиле репетитора
  };
}

export type TUserRole = 'student' | 'tutor' | 'unauth' | 'card';

export interface IUserData {
  role: TUserRole;
  tutorData?: ITutorData;
  studentData?: IStudentData;
  onSubmit?: boolean;
  navOption?: navOptionsStudent | navOptionsTutor; // Опция навигации, которая активна в данный момент
  changeTab?: (tab: navOptionsStudent | navOptionsTutor) => void;
}

export interface TutorCabinetCardProps
  extends Pick<ITutorData, 'name' | 'status' | 'rating' | 'linkRef' | 'image'> {
  tg: string;
}
