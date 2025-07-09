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
  ITutorData
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
    additionalInfo: 'Имеется возможность заниматься только в ПН, СР с 18:00 ',
    activityStatus: 0,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Математика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey1,
    additionalInfo: 'Могу заниматься только в ПН, СР с 18:00',
    activityStatus: 10,
    price: '2000-2500 ₽/час',
    subjects: ['Физика'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости']
  },
  {
    id: uuidv4(),
    name: 'Елизавета',
    image: Elizaveta,
    additionalInfo: 'Могу заниматься только в ПН, СР с 18:00',
    activityStatus: 5,
    lessonsCompleted: 2,
    price: '2000-2500 ₽/час',
    subjects: ['Английский язык'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости'],
    workingStatus: 'Занятия начались'
  },
  {
    id: uuidv4(),
    name: 'Сергей',
    image: Sergey2,
    additionalInfo: 'Могу заниматься только в ПН, СР с 18:00',
    activityStatus: 1,
    lessonsCompleted: 1,
    price: '2000-2500 ₽/час',
    subjects: ['Русский язык'],
    studentAudience: ['9-11 класс'],
    purpose: ['Подготовка к ЕГЭ', 'Повышение успеваемости']
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
      'Мои репетиторы': {
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
