import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Requests from '../../pages/Requests';
import TutorApplication from '../../pages/TutorApplication';
import TutorCatalogPage from '../../pages/TutorCatalogPage';;

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
    element: <TutorApplication />,
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
      route.path !== '/tutor-application'
  )
  .map((route) => route.path);
