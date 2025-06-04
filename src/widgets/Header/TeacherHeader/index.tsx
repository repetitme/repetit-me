import React from 'react';

import styles from '../index.module.scss';

import { CommonHeaderProps } from '../types';

const TeacherHeader: React.FC<CommonHeaderProps> = ({ onLogout }) => {
  return (
    <nav>
      <button className={styles.header__button}>Анкета</button>
      <button className={styles.header__button}>Мои заявки</button>
      <button className={styles.header__button}>Личный кабинет</button>
      <div className={styles.header__avatar} onClick={onLogout}>
        <img src="\assets\images\avatar.svg" alt="Аватар" />
      </div>
    </nav>
  );
};

export default TeacherHeader;
