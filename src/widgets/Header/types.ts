export type TAuth = 'unauth' | 'student' | 'teacher';

export interface HeaderProps {
  auth: TAuth;
}

export interface CommonHeaderProps {
  onLogout: () => void;
}
