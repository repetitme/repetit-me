import React from 'react';
import styles from '../index.module.scss';
import classNames from 'classnames';
import { CommonHeaderProps } from '../types';

const StudentHeader: React.FC<CommonHeaderProps> = ({ onLogout }) => {
  return (
    <nav
      className={classNames(
        styles.header__menu,
        styles['header__menu--student']
      )}
    >
      <button className={styles.header__button}>Репетиторы</button>
      <button className={styles.header__button}>Мои заявки</button>
      <div className={styles.header__avatar} onClick={onLogout}>
        <img src="src\assets\images\avatar.svg" alt="Аватар" />
      </div>
    </nav>
  );
};

export default StudentHeader;
