import ApplicationProgress from '../../features/TutorCabinet/ui/ApplicationProgress';
import ProfileCard from '../../features/TutorCabinet/ui/ProfileCard';
import { profileCardData } from '../../features/TutorCabinet/ui/ProfileCard/mockData';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import TutorApplication from '../../pages/TutorApplication';
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
    element: <TutorApplication />,
    auth: false
  },
  {
    path: '/test',

    element: (
      <>
        <ApplicationProgress
          isProfileHidden={true}
          onToggleVisibility={() => {}}
        />
        <ProfileCard
          image={profileCardData.image}
          name={profileCardData.name}
          status={profileCardData.status}
          tg={profileCardData.tg}
          link={profileCardData.link}
          rating={profileCardData.rating}
        />
      </>
    ),
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
