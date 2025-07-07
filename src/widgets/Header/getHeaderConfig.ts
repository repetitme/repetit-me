import { Location, NavigateFunction } from 'react-router-dom';
import { DropDownItem, HeaderConfigProps, NavItem, TUserRole } from './types';

const getHeaderConfig = ({
  role,
  onLogout,
  navigate,
  location
}: HeaderConfigProps & {
  navigate: NavigateFunction;
  location: Location;
}) => {
  const navItems: Record<TUserRole, NavItem[]> = {
    unauth: [
      { text: 'Репетиторы', path: '/tutors' }
    ],
    student: [
      { text: 'Репетиторы', path: '/tutors' },
      { text: 'Мои заявки', path: '/student-requests' }
    ],
    tutor: [
      { text: 'Анкета', path: '/application' },
      { text: 'Мои заявки', path: '/tutor-requests' },
      { text: 'Личный кабинет', path: '/profile' }
    ]
  };

   const dropDownItems: DropDownItem[] = role !== 'unauth' ? [
    {
      text: 'Сменить аккаунт',
      icon: '/assets/icons/change.svg',
      onClick: () => navigate('/login', { state: { backgroundLocation: location } })
    },
    {
      text: 'Выход',
      icon: '/assets/icons/exit.svg',
      onClick: onLogout
    }
  ] : [];

  return { navItems, dropDownItems };
};

export default getHeaderConfig