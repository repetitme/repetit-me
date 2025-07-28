import TutorApplication from '../../features/tutorApplication';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import TutorApplicationPage from '../../pages/TutorApplication';
import TutorCatalogPage from '../../pages/TutorCatalogPage';

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
    path: '/tutor-application',
    element: <TutorApplicationPage />,
    auth: false
  },
  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  },
  {
    path: 'test',
    element: <TutorApplication />,
    auth: false
  }
];

export const knownPaths = routesConfig
  .filter(
    (route) =>
      route.path !== '*' &&
      route.path !== '/tutor-catalog' &&
      route.path !== '/tutor-application'
  )
  .map((route) => route.path);
