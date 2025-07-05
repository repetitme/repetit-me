import TutorFilters from '../../features/TutorFilters';
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
    path: '*',
    element: <NotFoundPage />,
    auth: false
  },
  {
    path: '/test',
    element: (
      <div style={{ margin: '10px 100px' }}>
        <TutorFilters onSubmit={() => {}} percentage={10} />
      </div>
    ),
    auth: false
  }
];
