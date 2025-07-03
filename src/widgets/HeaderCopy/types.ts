export type TAuth = 'unauth' | 'student' | 'tutor';

export interface HeaderProps {
  auth: TAuth;
}

export interface CommonHeaderProps {
  onLogout: () => void;
}
