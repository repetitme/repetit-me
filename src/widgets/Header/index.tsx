import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAuthHeader(auth);
  }, [auth]);

  const handleLogout = () => {
    setAuthHeader('unauth');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo} onClick={() => navigate('/')}>
        <img src={logo} alt="Логотип Repetit Me" />
      </div>
      {authHeader === 'unauth' && (
        <nav className={styles.header__nav}>
          <div className={styles.header__nav__menu}>
            <Link to="/tutors" className={styles.header__nav__menu__link}>
              Репетиторы
            </Link>
            <Link
              to="/register"
              className={styles.header__nav__menu__link}
              state={{ backgroundLocation: location }}
            >
              Войти
            </Link>
          </div>
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
