import TutorApplicationData from './type';

export const initialTutorData: TutorApplicationData = {
  profileInfo: {
    firstName: '',
    lastName: '',
    telegram: '',
    avatar: ''
  },
  subjects: [],
  diplomas: [],
  video: null,
  schedule: {
    days: []
  }
};
