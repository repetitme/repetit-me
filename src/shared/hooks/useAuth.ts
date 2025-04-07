import { useState } from 'react';

type TUseAuthProps = {
  isAuth: boolean;
};

export const useAuth = (): TUseAuthProps => {
  const [isAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });
  return { isAuth };
};