export type TAuth = 'unauth' | 'student' | 'tutor';

export interface HeaderProps {
  auth: TAuth;
}

export interface CommonHeaderProps {
  onLogout: () => void;
}

export interface NavItem {
  text: string;
  path?: string;
  icon?: string;
  onClick?: () => void;
}

export interface AuthHeaderProps {
  navItems: NavItem[];
  avatarMenuItems: NavItem[];
  avatarImage?: string;
}
