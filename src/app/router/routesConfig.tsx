import TutorApplication from '../../features/tutorApplication';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Requests from '../../pages/Requests';
import TutorApplicationPage from '../../pages/TutorApplicationPage';
import TutorCatalogPage from '../../pages/TutorCatalogPage';
import TutorPage from '../../pages/TutorPage';

import { IRoute } from './type';

export const routesConfig: IRoute[] = [
  {
    path: '/',
    element: <MainPage />,
    auth: false
  },
  {
    path: '/requests',
    element: <Requests />,
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
    path: '/test',
    element: <TutorApplication />,
    auth: false
  },
  {
    path: '/tutor-catalog/:id',
    element: <TutorPage />,
    auth: false
  },
  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  }
];

export const knownPaths = routesConfig
  .filter(
    (route) =>
      route.path !== '*' &&
      route.path !== '/tutor-catalog' &&
      route.path !== '/tutor-application' &&
      route.path !== '/requests'
  )
  .filter((route) => route.path !== '*' && route.path !== '/tutor-catalog')
  .map((route) => route.path);
