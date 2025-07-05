export interface ButtonProps {
  text: string;
  variant: 'white' | 'purple' | 'red' | 'social' | 'reset' | 'underline';
  // size: по дефолту размер текста 16px, при large - 20px. Возможно, добавятся еще размеры (есть в макете):
  size?: 'large';
  icon?: string;
  disabled?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}
