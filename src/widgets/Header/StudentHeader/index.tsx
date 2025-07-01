import React from 'react';

import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from '../index.module.scss';

import { CommonHeaderProps } from '../types';

const StudentHeader: React.FC<CommonHeaderProps> = ({ onLogout }) => {
  const [isActive, setIsActive] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownToggle = () => {
    setIsActive(!isActive);
  };

  const handleChangeAccount = () => {
    navigate('/login', { state: { backgroundLocation: location } });
    onLogout();
  };

  return (
    <nav className={cn(styles.header__menu, styles['header__menu--student'])}>
      <button className={styles.header__button}>Репетиторы</button>
      <button className={styles.header__button}>Мои заявки</button>
      <div className={styles.header__avatar} onClick={handleDropdownToggle}>
        <img src="\assets\images\userAvatar.png" alt="Аватар" />
        <div
          className={cn(styles.header__submenu, {
            [styles['header__submenu--active']]: isActive
          })}
        >
          <nav className={styles.header__submenu__list}>
            <button
              className={styles.header__submenu__list__item}
              onClick={() => handleChangeAccount()}
            >
              <img src="\assets\icons\change.svg" alt="Сменить аккаунт" />
              Сменить аккаунт
            </button>
            <button
              className={styles.header__submenu__list__item}
              onClick={() => {
                onLogout();
              }}
            >
              <img src="\assets\icons\exit.svg" alt="Выход" />
              Выход
            </button>
          </nav>
        </div>
        <button
          className={cn(styles.header__avatar__chevron, {
            [styles['header__avatar__chevron--active']]: isActive
          })}
        ></button>
      </div>
    </nav>
  );
};

export default StudentHeader;
