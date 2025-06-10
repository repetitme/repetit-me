import NewFeedbackForm from '../../features/NewFeedbackForm';
import MainPage from '../../pages/MainPage';
import SelectField from '../../shared/ui/formField/selectField';
import Textarea from '../../shared/ui/textarea'
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
        <NewFeedbackForm toggleVisible={() => {}} />
         
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
