import classNames from 'classnames';
import styles from './index.module.scss';

interface ButtonProps {
  text: string;
  variant: 'white' | 'purple' | 'red';
  // size: по дефолту размер текста 16px, при large - 20px. Возможно, добавятся еще размеры (есть в макете):
  size?: 'large';
  Icon?: React.ReactNode;
  disabled?: boolean;
  className?: string; // для добавления стилей при необходимости
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  Icon,
  disabled = false,
  className,
  onClick
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    {
      [styles.large]: size === 'large',
      [styles.disabled]: disabled
    },
    className
  );
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
      {Icon && <span className={styles.icon}>{Icon}</span>}
    </button>
  );
};

export default Button;
