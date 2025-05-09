import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import logo from '../../assets/images/logo.svg';
import icon from '../../assets/images/telegram_icon.svg';
import Button from '../../shared/ui/button';
import StudentHeader from './StudentHeader';
import TeacherHeader from './TeacherHeader';

import styles from './index.module.scss';

import { HeaderProps, TAuth } from './types';

const Header: React.FC<HeaderProps> = ({ auth }) => {
  const navigate = useNavigate();
  const [authHeader, setAuthHeader] = useState<TAuth>(auth ? auth : 'unauth');

  useEffect(() => {
    setAuthHeader(auth);
  }, [auth]);

  const handleLogin = () => {
    setAuthHeader('student');
  };

  const handleLogout = () => {
    setAuthHeader('unauth');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src={logo}
          alt="Логотип RepetitMe"
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      {authHeader === 'unauth' && (
        <nav className={styles.header__menu}>
          <button className={styles.header__button}>Репетиторы</button>
          <button className={styles.header__button} onClick={handleLogin}>
            Войти
          </button>
          <Button
            variant="social"
            size="large"
            text="Перейти в Telegram"
            icon={icon}
            className={styles.telegram}
          />
        </nav>
      )}
      {authHeader === 'student' && <StudentHeader onLogout={handleLogout} />}
      {authHeader === 'teacher' && <TeacherHeader onLogout={handleLogout} />}
    </header>
  );
};

export default Header;
