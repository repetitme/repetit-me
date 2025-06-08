import { AboutMe } from '../../entities/aboutMe';
import { servicesList, textContent } from '../../entities/aboutMe/data';
import MainPage from '../../pages/MainPage';
import Stepper from '../../shared/ui/stepper';
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
      <div style={{ margin: '10px 0 10px 120px', maxWidth: '1200px' }}>
        <Stepper currentStep={1} />
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
    path: '/aboutMe',
    element: (
      <div style={{ inlineSize: '895px', margin: '20px auto' }}>
        <AboutMe textContent={textContent} servicesList={servicesList} />
      </div>
    ),
    auth: false
  }
];
