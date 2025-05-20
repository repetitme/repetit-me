import MainPage from '../../pages/MainPage';
import InputField from '../../shared/ui/formField/input';
import Select from '../../shared/ui/formField/select';
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
          id="telegram"
          type="text"
          label="Ник в Telegram"
          description="Например, @username"
        />
        <Textarea
          id="about"
          label="Обо мне"
          rows={4}
          description="Расскажите о своём опыте и подходе к обучению"
        />
        <Select
          id="subject"
          name="subject"
          label="Предмет"
          options={[
            { value: 'math', label: 'Математика' },
            { value: 'physics', label: 'Физика' }
          ]}
          placeholder="Выберите предмет"
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
