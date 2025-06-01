import MainPage from '../../pages/MainPage';
import FeedbackList from '../../widgets/FeedbackList';
import NotFoundPage from '../../widgets/NotFoundPage/index';
import Schedule from '../../widgets/Schedule';

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
        <FeedbackList updateModalData={() => {}} />
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
  },
  {
    path: '/test',
    element: (
      <div style={{ margin: '100px auto' }}>
        <Schedule
          onChange={(value) => {
            console.log('Свободное время', value);
          }}
        />
      </div>
    ),
    auth: false
  }
];
