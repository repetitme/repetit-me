import { initialSubject } from '../../features/tutorApplication/ui/subjectForm/type';
import TutorApplicationData from './type';

export const initialTutorData: TutorApplicationData = {
  profileInfo: {
    firstName: '',
    lastName: '',
    tg: '',
    avatar: ''
  },
  subjects: [initialSubject],
  diplomas: [],
  video: null,
  schedule: {
    days: []
  }
};
