import classNames from 'classnames';

import { ButtonProps } from './type';

import styles from './index.module.scss';

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
    <ButtonElement {...attributes}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
      {text}
    </ButtonElement>
  );
};

export default Button;
