import { AboutMe } from '../../entities/aboutMe';
import { servicesList, textContent } from '../../entities/aboutMe/data';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../widgets/NotFoundPage/index';
import { AboutService } from '../../widgets/AboutService';
import {
  bonusPopupData,
  reviewPopupData
} from '../../widgets/AboutService/data';

import { IRoute } from './type';

export const routesConfig: IRoute[] = [
  {
    path: '/',
    element: <MainPage />,
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
    path: '/aboutService',
    element: (
      <div style={{ inlineSize: 'fit-content', margin: '20px auto' }}>
        <AboutService
          bonusPopup={bonusPopupData}
          reviewPopup={reviewPopupData}
        />
      </div>
    ),
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
