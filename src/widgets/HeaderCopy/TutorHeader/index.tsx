import React from 'react';

import { useNavigate } from 'react-router';

import AuthHeader from '../AuthHeader';

import { CommonHeaderProps } from '../types';

const TutorHeader: React.FC<CommonHeaderProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <AuthHeader
      navItems={[
        { text: 'Анкета', path: '/application' },
        { text: 'Мои заявки', path: '/tutor-requests' },
        { text: 'Личный кабинет', path: '/profile' }
      ]}
      avatarMenuItems={[
        {
          text: 'Сменить аккаунт',
          icon: '../../../assets/icons/change.svg',
          onClick: () => {
            navigate('/login');
          }
        },
        {
          text: 'Выход',
          icon: '/assets/icons/exit.svg',
          onClick: onLogout
        }
      ]}
    />
  );
};

export default TutorHeader;
