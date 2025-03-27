import { useEffect, useState } from 'react';

type TUseAuthProps = {
  isAuthenticated: boolean;
};

export const useAuth = (): TUseAuthProps => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};

