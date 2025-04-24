import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '../../shared/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../shared/hooks/useAuth';
import { routesConfig } from './routesConfig';

const AppRouter: React.FC = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      {routesConfig.map((route) => {
        const { path, element, auth } = route;
        return (
          <Route
            key={path}
            path={path}
            element={
              auth ? (
                <ProtectedRoute isAuth={isAuth} element={element} />
              ) : (
                element
              )
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default AppRouter;
