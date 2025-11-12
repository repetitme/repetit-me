import { useEffect, useState } from 'react';

import cn from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import avatar from '../../assets/images/avatarHeader.png';
import logo from '../../assets/images/logo.svg';
import icon from '../../assets/images/telegram_icon.svg';
import useClickOutside from '../../shared/hooks/useClickOutside';
import Button from '../../shared/ui/button';
import getHeaderConfig from './getHeaderConfig';

import styles from './index.module.scss';

import { HeaderProps, TUserRole } from './types';

const Header = ({ auth }: HeaderProps) => {
  const [authHeader, setAuthHeader] = useState<TUserRole>(auth || 'unauth');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthHeader('unauth');
    navigate('/');
  };

  const dropdownRef = useClickOutside(() => {
    setIsMenuOpen(false);
  });

  const { navItems, dropDownItems } = getHeaderConfig({
    role: authHeader,
    onLogout: handleLogout,
    navigate,
    location
  });

  useEffect(() => {
    setAuthHeader(auth);
  }, [auth]);

  const handleTelegramClick = () => {
    window.open('tg://resolve?domain=RepetitMe_bot', '_blank');

    setTimeout(() => {
      window.open('https://t.me/RepetitMe_bot', '_blank');
    }, 200);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo} aria-label="На главную">
        <img src={logo} alt="Логотип Repetit Me" />
      </Link>

      {authHeader === 'unauth' ? (
        <nav className={styles.header__nav}>
          {navItems.unauth.map((item) => (
            <Link
              key={item.text}
              to={item.path}
              className={cn(styles.header__nav__link, {
                [styles['header__nav__link--active']]:
                  location.pathname === item.path
              })}
            >
              {item.text}
            </Link>
          ))}
          <Link
            to="/register"
            className={cn(styles.header__nav__link, {
              [styles['header__nav__link--active']]:
                location.pathname === '/register'
            })}
            state={{ backgroundLocation: location }}
          >
            Войти
          </Link>
          <Button
            variant="social"
            size="large"
            text="Перейти в Telegram"
            icon={icon}
            className={styles.telegram}
            onClick={handleTelegramClick}
          />
        </nav>
      ) : (
        <div className={styles.header__menu}>
          <nav className={styles.header__nav}>
            {navItems[authHeader].map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={cn(styles.header__nav__link, {
                  [styles['header__nav__link--active']]:
                    location.pathname === item.path
                })}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div
            className={styles.header__avatar}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={dropdownRef}
          >
            <img
              src={avatar}
              alt="Аватар"
              className={styles.header__avatar__image}
            />
            <div />

            <div
              className={cn(styles.header__submenu, {
                [styles['header__submenu--active']]: isMenuOpen
              })}
            >
              {dropDownItems.map((item) => (
                <button
                  key={item.text}
                  className={styles.header__submenu__list__item}
                  onClick={item.onClick}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt=""
                      className={styles.header__submenu__list__icon}
                    />
                  )}
                  <span>{item.text}</span>
                </button>
              ))}
            </div>

            <button
              className={cn(styles.header__avatar__chevron, {
                [styles['header__avatar__chevron--active']]: isMenuOpen
              })}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
