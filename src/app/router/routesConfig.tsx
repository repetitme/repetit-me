import MainPage from '../../pages/MainPage';
import Requests from '../../pages/Requests';
import NotFoundPage from '../../widgets/NotFoundPage/index';

import { IRoute } from './type';

export const routesConfig: IRoute[] = [
  {
    path: '/',
    element: <MainPage />,
    auth: false
  },
  {
    path: '/requests',
    element: <Requests role='student'/>,
    auth: false
  },
  {
    path: '/test',
    element: (
      <div style={{ margin: '10px 0 10px 120px', maxWidth: '1200px' }}>
        <NotFoundPage />
      </div>
    ),
    auth: false
  },

  {
    path: '*',
    element: <NotFoundPage />,
    auth: false
  }
];
