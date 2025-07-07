import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import icon from '../../assets/images/telegram_icon.svg';
import Button from '../../shared/ui/button';
import StudentHeader from './StudentHeader';
import TutorHeader from './TutorHeader';

import styles from './index.module.scss';

import { HeaderProps, TUserRole } from './types';

const Header = ({ auth }: HeaderProps) => {
  const [authHeader, setAuthHeader] = useState<TUserRole>(
    auth ? auth : 'unauth'
  );

  const location = useLocation();

  useEffect(() => {
    setAuthHeader(auth);
  }, [auth]);

  const handleLogout = () => {
    setAuthHeader('unauth');
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo} aria-label="На главную">
        <img src={logo} alt="Логотип Repetit Me" />
      </Link>
      {authHeader === 'unauth' && (
        <nav className={styles.header__nav}>
          <Link to="/tutors" className={styles.header__nav__link}>
            Репетиторы
          </Link>
          <Link
            to="/register"
            className={styles.header__nav__link}
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
          />
        </nav>
      )}
      {authHeader === 'student' && (
        <StudentHeader role="student" onLogout={handleLogout} />
      )}
      {authHeader === 'tutor' && (
        <TutorHeader role="tutor" onLogout={handleLogout} />
      )}
    </header>
  );
};

export default Header;
