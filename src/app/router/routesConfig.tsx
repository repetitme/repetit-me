import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import TutorCatalogPage from '../../pages/TutorCatalogPage';
import { ScheduleProfile } from '../../widgets/ScheduleProfile';
import {
  firstLessonsData,
  scheduleLessonsData
} from '../../widgets/ScheduleProfile/data';

import { IRoute } from './type';

export const routesConfig: IRoute[] = [
  {
    path: '/',
    element: <MainPage />,
    auth: false
  },
  {
    path: '/tutor-catalog',
    element: <TutorCatalogPage />,
    auth: false
  },
  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  },
  {
    path: '/scheduleProfile',
    element: (
      <div style={{ margin: '20px auto' }}>
        <ScheduleProfile
          firstLessons={firstLessonsData}
          scheduleLessons={scheduleLessonsData}
        />
      </div>
    ),
    auth: false
  }
];

export const knownPaths = routesConfig
  .filter((route) => route.path !== '*' && route.path !== '/tutor-catalog')
  .map((route) => route.path);
