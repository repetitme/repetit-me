import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import TutorCatalogPage from '../../pages/TutorCatalogPage';
import { Schedule } from '../../widgets/Schedule';
import {
  firstLessonsData,
  scheduleLessonsData
} from '../../widgets/Schedule/data';

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
    path: '/schedule',
    element: (
      <div style={{ margin: '20px auto' }}>
        <Schedule
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
