export interface ButtonProps {
  text: string;
  variant: 'white' | 'purple' | 'red' | 'social';
  // size: по дефолту размер текста 16px, при large - 20px. Возможно, добавятся еще размеры (есть в макете):
  size?: 'large';
  icon?: string;
  disabled?: boolean;
  className?: string; // для добавления стилей при необходимости
  onClick?: () => void;
}