import { v4 as uuidv4 } from 'uuid';

import Elizaveta from '../../../assets/images/UserCardIcons/StudentImg/student_elizaveta-1.png';
import Sergey1 from '../../../assets/images/UserCardIcons/StudentImg/student_sergey-1.png';
import Sergey2 from '../../../assets/images/UserCardIcons/StudentImg/student_sergey-2.png';
import Victor from '../../../assets/images/UserCardIcons/StudentImg/student_victor-1.png';
import Aleksandr1 from '../../../assets/images/UserCardIcons/TutorImg/tutor_aleksandr-1.png';
import Aleksandr2 from '../../../assets/images/UserCardIcons/TutorImg/tutor_aleksandr-2.png';
import Aleksandra1 from '../../../assets/images/UserCardIcons/TutorImg/tutor_aleksandra-1.png';
import Vyacheslav from '../../../assets/images/UserCardIcons/TutorImg/tutor_vyacheslav-1.png';
import {
  IStudentData,
  IStudentProfile,
  ITutorData,
  ITutorProfile
} from '../../../shared/types/userData';

export const mockTutors: ITutorData[] = [
  {
    id: uuidv4(),
    name: 'Вячеслав Алексеевич Масленников',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Vyacheslav,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 5.0,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Александрович Александров',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Русский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4.2
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Здравствуйте! Меня зовут Александра, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 2.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Алексеев Алексеевич',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr2,
    status: 'Частный преподаватель',
    experienceYears: 10,
    price: '2100 ₽/50мин',
    subjects: ['Английский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 3.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Александрович Александров',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Русский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 1.5
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Здравствуйте! Меня зовут Александра, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Александрович Александров',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Русский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4.2
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Здравствуйте! Меня зовут Александра, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 2.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Александрович Александров',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Русский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4.2
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Здравствуйте! Меня зовут Александра, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 2.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александр Александрович Александров',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Русский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4.2
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Здравствуйте! Меня зовут Александра, и я репетитор по математике с 5-летним опытом работы, 
    выпускник КубГУ. Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 2.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Александра Александровна Иванова',
    description: `Индивидуальный подход: Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 2.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Эдуард Эдуардович Эдуардов',
    description: `Здравствуйте! Меня зовут Александр, и я репетитор по математике с 5-летним опытом работы, Каждый ученик уникален, и я адаптирую свои методы 
    обучения под конкретные потребности, интересы и цели.`,
    image: Aleksandr2,
    status: 'Частный преподаватель',
    experienceYears: 10,
    price: '2100 ₽/50мин',
    subjects: ['Английский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 5.0,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Иван Иванович Иванов',
    description: `Каждый ученик уникален`,
    image: Aleksandra1,
    status: 'Частный преподаватель',
    experienceYears: 5,
    price: '2100 ₽/50мин',
    subjects: ['Математика', 'Физика'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 4.9,
    link: '#!'
  },
  {
    id: uuidv4(),
    name: 'Олег Олегович Олегов',
    description: `Здравствуйте!`,
    image: Aleksandr2,
    status: 'Частный преподаватель',
    experienceYears: 10,
    price: '2100 ₽/50мин',
    subjects: ['Английский язык'],
    studentAudience: ['5-8 класс', '9-11 класс'],
    purpose: ['Подготовка к ВПР', 'Подготовка к ЕГЭ'],
    rating: 5.0,
    link: '#!'
  }
];

export const mockStudents: IStudentData[] = [
  {
    id: uuidv4(),
    name: 'Виктор',
    image: Victor,
    importantInfo: 437,
    additionalInfo: 'Могу заниматься в ПН, СР с 18:00',
    activityStatus: 0,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Математика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey1,
    additionalInfo: 'Занимается только в выходные',
    activityStatus: 10,
    price: '2000-2500 ₽/час',
    subjects: ['Физика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Елизавета',
    image: Elizaveta,
    additionalInfo: 'Доступна после 19:00',
    activityStatus: 5,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Английский язык'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey2,
    additionalInfo: 'Можно по будням до 17:00',
    activityStatus: 1,
    lessonsCompleted: 1,
    price: '2000-2500 ₽/час',
    subjects: ['Русский язык'],
    studentAudience: ['9-11 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Александр',
    image: Aleksandr1,
    additionalInfo: 'Готов к занятиям утром',
    activityStatus: 3,
    lessonsCompleted: 0,
    price: '2000-2500 ₽/час',
    subjects: ['Информатика'],
    studentAudience: ['9 класс'],
    purpose: ['Подготовка к ОГЭ']
  },
  {
    id: uuidv4(),
    name: 'Александр',
    image: Aleksandr2,
    additionalInfo: 'Есть только вечер среды',
    activityStatus: 2,
    lessonsCompleted: 0,
    price: '2000-2500 ₽/час',
    subjects: ['Обществознание'],
    studentAudience: ['10 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Александра',
    image: Aleksandra1,
    additionalInfo: 'Свободна с 15:00 до 17:00',
    activityStatus: 4,
    lessonsCompleted: 1,
    price: '2000-2500 ₽/час',
    subjects: ['История'],
    studentAudience: ['11 класс'],
    purpose: ['Подготовка к ЕГЭ'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Вячеслав',
    image: Vyacheslav,
    additionalInfo: 'Доступен в любое время',
    activityStatus: 0,
    price: '2000-2500 ₽/час',
    subjects: ['География'],
    studentAudience: ['8 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Виктор',
    image: Victor,
    additionalInfo: 'После 20:00 только онлайн',
    activityStatus: 6,
    lessonsCompleted: 3,
    price: '2000-2500 ₽/час',
    subjects: ['Химия'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey1,
    additionalInfo: 'Только офлайн',
    activityStatus: 7,
    price: '2000-2500 ₽/час',
    subjects: ['Биология'],
    studentAudience: ['8 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Елизавета',
    image: Elizaveta,
    additionalInfo: 'Вторник и четверг с 18:00',
    activityStatus: 2,
    lessonsCompleted: 1,
    price: '2000-2500 ₽/час',
    subjects: ['Литература'],
    studentAudience: ['10 класс'],
    purpose: ['Подготовка к ЕГЭ']
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey2,
    additionalInfo: 'Есть слот в пятницу',
    activityStatus: 1,
    price: '2000-2500 ₽/час',
    subjects: ['Физика'],
    studentAudience: ['9 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Александра',
    image: Aleksandra1,
    additionalInfo: 'Пн и Ср после 17:00',
    activityStatus: 4,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Английский язык'],
    studentAudience: ['7 класс'],
    purpose: ['Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Александр',
    image: Aleksandr2,
    additionalInfo: 'До 16:00 по будням',
    activityStatus: 3,
    price: '2000-2500 ₽/час',
    subjects: ['Математика'],
    studentAudience: ['5-6 класс'],
    purpose: ['Общее развитие']
  },
  {
    id: uuidv4(),
    name: 'Вячеслав',
    image: Vyacheslav,
    additionalInfo: 'Любой вечер, кроме пятницы',
    activityStatus: 5,
    price: '2000-2500 ₽/час',
    subjects: ['История'],
    studentAudience: ['11 класс'],
    purpose: ['Подготовка к ЕГЭ']
  }
];

export const mockStudentProfile: IStudentProfile[] = [
  {
    id: uuidv4(),
    name: 'Виктор',
    image: Victor,
    importantInfo: 437,
    additionalInfo: 'Имеется возможность заниматься только в ПН, СР с 18:00 ',
    activityStatus: 0,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Математика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости'],
    workingStatus: 'Занятия начались',
    requests: {
      ['Мои репетиторы']: {
        ids: [
          mockTutors[0].id,
          mockTutors[1].id,
          mockTutors[2].id,
          mockTutors[3].id,
          mockTutors[4].id,
          mockTutors[5].id,
          mockTutors[6].id,
          mockTutors[7].id
        ]
      },
      Заявки: { ids: [mockTutors[2].id, mockTutors[3].id] },
      Запросы: {
        ids: [
          mockTutors[4].id,
          mockTutors[5].id,
          mockTutors[6].id,
          mockTutors[7].id
        ]
      }
    }
  }
];

export const mockTutorProfile: ITutorProfile[] = [
  {
    id: uuidv4(),
    name: 'Виктор',
    image: Victor,
    experienceYears: 5,
    description: `Имеется возможность заниматься только в ПН, СР с 18:00 `,
    price: '2000-2500 ₽/час',
    subjects: ['Математика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости'],
    rating: 4.5,
    status: 'Частный преподаватель',
    requests: {
      ['Мои ученики']: {
        ids: [
          mockStudents[1].id,
          mockStudents[2].id,
          mockStudents[3].id,
          mockStudents[4].id,
          mockStudents[5].id,
          mockStudents[6].id,
          mockStudents[7].id,
          mockStudents[13].id,
          mockStudents[14].id
        ]
      },
      Заявки: {
        ids: [
          mockStudents[8].id,
          mockStudents[9].id,
          mockStudents[10].id,
          mockStudents[11].id
        ]
      },
      Запросы: {
        ids: [mockStudents[12].id]
      }
    }
  }
];
