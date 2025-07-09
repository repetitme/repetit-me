import { Location, NavigateFunction } from 'react-router';

export type TUserRole = 'unauth' | 'student' | 'tutor';

export interface HeaderProps {
  auth: TUserRole;
}

export interface HeaderConfigProps {
  role: TUserRole;
  onLogout: () => void;
  navigate: NavigateFunction;
  location: Location;
}

export interface NavItem {
  text: string;
  path: string;
  icon?: string;
  onClick?: () => void;
  withLocationState?: boolean;
}

export interface DropDownItem {
  text: string;
  icon?: string;
  onClick: () => void;
}
