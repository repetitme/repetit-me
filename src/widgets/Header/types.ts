export type TUserRole = 'unauth' | 'student' | 'tutor';

export interface HeaderProps {
  auth: TUserRole;
}

export interface CommonHeaderProps {
  role: Exclude<TUserRole, 'unauth'>;
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
