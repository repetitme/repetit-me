import MainPage from '../../pages/MainPage';
import HeaderCopy from '../../widgets/HeaderCopy';
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
      <div style={{ margin: '20px auto' }}>
        <HeaderCopy auth={'student'} />
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
