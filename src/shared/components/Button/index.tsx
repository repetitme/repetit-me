import classNames from 'classnames';
import styles from './index.module.scss';
import { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  icon,
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
      {icon && (
        <img src={icon} alt="Иконка Telegram" className={styles.icon}></img>
      )}
      {text}
    </button>
  );
};

export default Button;
