import TutorApplicationData from './type'

// ТЕСТОВЫЕ ДАННЫЕ - УДАЛИТЬ ПОСЛЕ ТЕСТИРОВАНИЯ
export const testProfileData = {
  firstName: 'Иван',
  lastName: 'Иванов',
  telegram: '@ivanov',
  avatar: ''
};


export const testSubjectsData = [
  {
    discipline: { value: 'math', label: 'Математика' },
    status: { value: 'tutor', label: 'Репетитор' },
    target: { value: 'exam', label: 'Подготовка к экзамену' },
    experience: '3',
    isActive: true,
    categories: []
  }
];

export const initialTutorData: TutorApplicationData = {
  profileInfo: testProfileData, // Заменить на пустые значения после теста
  subjects: testSubjectsData,  // Заменить на [] после теста
  diplomas: [],
  videos: { url: '' },
  schedule: { days: [] }
};
