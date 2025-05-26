import AuthForm from '../../features/Auth';
import MainPage from '../../pages/MainPage';
import AuthModal from '../../widgets/AuthModal';
import FeedbackList from '../../widgets/FeedbackList';
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
    path: '/register',
    element: <AuthModal />,
    auth: false
  },
  {
    path: '/login',
    element: <AuthForm />,
    auth: false
  },
  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  }
];
