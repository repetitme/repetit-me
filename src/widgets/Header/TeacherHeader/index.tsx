import React from 'react';
import styles from '../styles.module.scss';

const TeacherHeader: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <nav>
      <button className={styles.header__button}>Анкета</button>
      <button className={styles.header__button}>Мои заявки</button>
      <button className={styles.header__button}>Личный кабинет</button>
      <div className={styles.header__avatar} onClick={onLogout}>
        <img src="src\assets\styles\avatar.png" alt="Аватар" />
      </div>
    </nav>
  );
};

export default TeacherHeader;
