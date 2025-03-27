import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';
import NotFoundPage from '../../shared/NotFoundPage';
import ProtectedRoute from '../../shared/ProtectedRoute/ProtectedRoute';

interface IRoute {
  path: string;
  element: React.ReactNode;
  auth?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/student-application',
    element: <StudentApplication />,
    auth: true
  },
  {
    path: '/student-profile',
    element: <StudentProfile />,
    auth: true
  },
  {
    path: '/teacher-application',
    element: <TeacherApplication />,
    auth: true
  },
  {
    path: '/teacher-profile',
    element: <TeacherProfile />,
    auth: true
  }
];

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      {routes.map((route) => {
        const { path, element, auth } = route;
        return (
          <Route
            key={path}
            path={path}
            element={
              auth ? (
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  element={element}
                />
              ) : (
                element
              )
            }
          ></Route>
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
