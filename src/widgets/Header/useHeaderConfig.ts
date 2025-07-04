import { useLocation, useNavigate } from 'react-router';

import { CommonHeaderProps } from './types';

const useHeaderConfig = ({ role, onLogout }: CommonHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const MenuItems = [
    {
      text: 'Сменить аккаунт',
      icon: '/assets/icons/change.svg',
      onClick: () => {
        navigate('/login', { state: { backgroundLocation: location } });
        onLogout();
      }
    },
    {
      text: 'Выход',
      icon: '/assets/icons/exit.svg',
      onClick: onLogout
    }
  ];

  const roleConfig = {
    student: {
      navItems: [
        { text: 'Репетиторы', path: '/tutors' },
        { text: 'Мои заявки', path: '/student-requests' }
      ],
      avatarMenuItems: MenuItems
    },
    tutor: {
      navItems: [
        { text: 'Анкета', path: '/application' },
        { text: 'Мои заявки', path: '/tutor-requests' },
        { text: 'Личный кабинет', path: '/profile' }
      ],
      avatarMenuItems: MenuItems
    }
  };

  return roleConfig[role];
};

export default useHeaderConfig;
