import React, { useState } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import avatar from '../../../assets/images/avatar.svg';

import styles from '../index.module.scss';

import { AuthHeaderProps } from '../types';

const AuthHeader: React.FC<AuthHeaderProps> = ({
  navItems,
  avatarMenuItems
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (item: { path?: string; onClick?: () => void }) => {
    if (item.path) navigate(item.path);
    item.onClick?.();
  };

  return (
    <nav className={cn(styles.header__menu, styles['header__menu--auth'])}>
      {navItems.map((item) => (
        <button
          key={item.text}
          className={styles.header__button}
          onClick={() => handleNavClick(item)}
        >
          {item.text}
        </button>
      ))}

      <div
        className={styles.header__avatar}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={avatar} alt="Аватар" />

        <div
          className={cn(styles.header__submenu, {
            [styles['header__submenu--active']]: isMenuOpen
          })}
        >
          {avatarMenuItems.map((item) => (
            <button
              key={item.text}
              className={styles.header__submenu__list__item}
              onClick={() => {
                handleNavClick(item);
                setIsMenuOpen(false);
              }}
            >
              {item.icon && <img src={item.icon} alt="" className={styles.header__submenu__list__icon} />}
              {item.text}
            </button>
          ))}
        </div>

        <button
          className={cn(styles.header__avatar__chevron, {
            [styles['header__avatar__chevron--active']]: isMenuOpen
          })}
        />
      </div>
    </nav>
  );
};

export default AuthHeader;
