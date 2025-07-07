import { IStudentData, ITutorData } from '../../../shared/types/userData';
import { mockStudents, mockTutors } from './mockData';

export const getTutors = (): Promise<ITutorData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockTutors) {
        resolve(mockTutors);
      } else {
        reject(new Error('Не удалось загрузить данные репетиторов'));
      }
    }, 250);
  });
};

export const getTutor = (id: string) => {
  return new Promise<ITutorData | undefined>((resolve, reject) => {
    setTimeout(() => {
      if (mockTutors) {
        resolve(mockTutors.find((tutor) => tutor.id === id));
      } else {
        reject(new Error('Не удалось загрузить данные репетитора'));
      }
    }, 250);
  });
};

export const getStudents = (): Promise<IStudentData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockStudents) {
        resolve(mockStudents);
      } else {
        reject(new Error('Не удалось загрузить данные учеников'));
      }
    }, 250);
  });
};

export const getStudent = (id: string) => {
  return new Promise<IStudentData | undefined>((resolve, reject) => {
    setTimeout(() => {
      if (mockStudents) {
        resolve(mockStudents.find((student) => student.id === id));
      } else {
        reject(new Error('Не удалось загрузить данные ученика'));
      }
    }, 250);
  });
};
