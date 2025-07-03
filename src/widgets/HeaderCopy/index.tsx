import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import icon from '../../assets/images/telegram_icon.svg';
import Button from '../../shared/ui/button';
import StudentHeader from './StudentHeader';
import TutorHeader from './TutorHeader';

import styles from './index.module.scss';

import { HeaderProps, TAuth } from './types';

const HeaderCopy: React.FC<HeaderProps> = ({ auth }) => {
  const [authHeader, setAuthHeader] = useState<TAuth>(auth ? auth : 'unauth');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAuthHeader(auth);
  }, [auth]);

  const handleLogin = () => {
    navigate('/register', { state: { backgroundLocation: location } });
  };

  const handleLogout = () => {
    setAuthHeader('unauth');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo} onClick={() => navigate('/')}>
        <img src={logo} alt="Логотип Repetit Me" />
      </div>
      {authHeader === 'unauth' && (
        <nav className={styles.header__menu}>
          <button
            className={styles.header__button}
            onClick={() => navigate('/tutors')}
          >
            Репетиторы
          </button>
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
      {authHeader === 'tutor' && <TutorHeader onLogout={handleLogout} />}
    </header>
  );
};

export default HeaderCopy;
