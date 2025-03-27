import React from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated
}) => {
  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
