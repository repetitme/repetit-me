import MainPage from '../../pages/MainPage';
import InputField from '../../shared/ui/formField/inputField';
import SelectField from '../../shared/ui/formField/selectField';
import Textarea from '../../shared/ui/formField/textarea';
import NotFoundPage from '../../widgets/NotFoundPage/index';

import { IRoute } from './type';

export const routesConfig: IRoute[] = [
  {
    path: '/',
    element: <MainPage />,
    auth: false
  },
  {
    path: '/test',
    element: (
      <div style={{ margin: '10px 100px' }}>
        <InputField
          id="email"
          label="Почта"
          type="email"
          placeholder="sasha@ya.ru"
          required
        />
        <Textarea
          id="about"
          label="Обо мне"
          placeholder="Добавьте информацию о себе. О вашей квалификации, сертификатах, об опыте преподавания. Объясните, какими будут ваши уроки, какие методы обучения используете в работе, как это помогает ученикам."
          // maxLength={5}
          // error='error' 
        />
        <SelectField
          label="Предметы"
          options={[
            { value: 'english', label: 'Английский язык' },
            { value: 'math', label: 'Математика' },
            { value: 'chemistry', label: 'Химия' },
            { value: 'phisics', label: 'Физика' }
          ]}
          onChange={(selected) => console.log(selected)}
          placeholder="Математика"
        />
      </div>
    ),
    auth: false
  },
  {
    path: '/student-application',
    element: <>StudentApplication</>,
    auth: true
  },
  {
    path: '/student-profile',
    element: <>StudentProfile</>,
    auth: true
  },
  {
    path: '/teacher-application',
    element: <>TeacherApplication</>,
    auth: true
  },
  {
    path: '/teacher-profile',
    element: <>TeacherProfile</>,
    auth: true
  },
  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  }
];
