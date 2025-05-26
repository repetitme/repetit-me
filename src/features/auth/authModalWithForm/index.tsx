import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthModal } from '../../../widgets/AuthModal';
import AuthForm from '../form';

export const AuthModalWithForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AuthModal onClose={() => navigate(-1)}>
      <AuthForm closeModal={() => navigate(-1)}></AuthForm>
    </AuthModal>
  );
};
