import React from 'react';

import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  element: React.ReactNode;
  isAuth: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
