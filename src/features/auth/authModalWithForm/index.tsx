import React, { useEffect, useState } from 'react';

import { AuthModal } from '../../../widgets/AuthModal';
import AuthForm from '../form';

import { AuthModalWithFormProps } from './types';

export const AuthModalWithForm: React.FC<AuthModalWithFormProps> = ({
  closeModal
}) => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && closeModal();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  const toggleForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    {
      /*TODO: заменить на перед между роутами, если нужно*/
    }
    setIsLoginForm(true);
  };

  return (
    <AuthModal type={isLoginForm} onClose={closeModal} onToggle={toggleForm}>
      <AuthForm login={isLoginForm} closeModal={closeModal}></AuthForm>
    </AuthModal>
  );
};
