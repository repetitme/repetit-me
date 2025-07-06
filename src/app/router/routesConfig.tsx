import TutorApplication from '../../features/tutor-application';
import MainPage from '../../pages/MainPage';
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
    element: <TutorApplication />,
    auth: false
  },

  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  }
];
