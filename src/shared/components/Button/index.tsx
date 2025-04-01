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
  onClick,
  href
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

  const ButtonElement = variant === 'social' ? 'a' : 'button';

  const attributes = {
    className: buttonClass,
    onClick,
    disabled,
    'aria-disabled': disabled,
    ...(variant === 'social' ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})
  };

  return (
<<<<<<< HEAD:src/shared/components/Button/index.tsx
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && (
        <img src={icon} alt="Иконка Telegram" className={styles.icon}></img>
      )}
=======
    <ButtonElement {...attributes}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
>>>>>>> 64062a6c33ce47606520be396980936a449720a1:src/shared/button/index.tsx
      {text}
    </ButtonElement>
  );
};

export default Button;
