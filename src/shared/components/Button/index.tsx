import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from './type';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button className={classNames(styles.button)} onClick={onClick}>
      {icon && <span className={styles.button__icon}>{icon}</span>}
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Button;
