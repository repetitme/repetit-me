import React from 'react';
import styles from '../index.module.scss';
import classNames from 'classnames';

const StudentHeader: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
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
        <img src="src/assets/styles/avatar.png" alt="Аватар" />
      </div>
    </nav>
  );
};

export default StudentHeader;
