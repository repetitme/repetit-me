export type TAuth = 'unauthorized' | 'student' | 'teacher';

export interface HeaderProps {
  auth: TAuth;
}

export interface CommonHeaderProps {
  onLogout: () => void;
}
