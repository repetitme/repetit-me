import { Route, Routes, useLocation } from 'react-router-dom';

import ProtectedRoute from '../../features/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../shared/hooks/useAuth';
import AuthModal from '../../widgets/AuthModal';
import { routesConfig } from './routesConfig';

const AppRouter: React.FC = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
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

      {backgroundLocation && (
        <Routes>
          <Route path="/register" element={<AuthModal />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
