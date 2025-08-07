import {
  IStudentData,
  IStudentProfile,
  ITutorData,
  ITutorProfile
} from '../../../shared/types/userData';
import {
  mockStudentProfile,
  mockStudents,
  mockTutorProfile,
  mockTutors
} from './mockData';

export const getTutors = (): Promise<ITutorData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockTutors) {
        resolve(mockTutors);
      } else {
        reject(new Error('Не удалось загрузить данные репетиторов'));
      }
    }, 500);
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

export const getProfile = (id: string, role: 'student' | 'tutor') => {
  return new Promise<IStudentProfile | ITutorProfile | undefined>(
    (resolve, reject) => {
      setTimeout(() => {
        if (role === 'student' ? mockStudentProfile : mockTutorProfile) {
          resolve(
            (role === 'student' ? mockStudentProfile : mockTutorProfile).find(
              (person) => person.id === id
            )
          );
        } else {
          reject(new Error('Не удалось загрузить данные ученика'));
        }
      }, 250);
    }
  );
};
