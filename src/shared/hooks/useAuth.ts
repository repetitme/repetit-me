import { useEffect, useState } from 'react';

type TUseAuthProps = {
  isAuth: boolean;
};

export const useAuth = (): TUseAuthProps => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuth(!!token);
  }, []);

  return { isAuth };
};

