import styles from './styles.module.css';
import logo from '../../assets/images/logo.svg';
import telegramIcon from '../../assets/images/telegramIcon.svg';
import { useEffect, useState } from 'react';
import TeacherHeader from './TeacherHeader';
import StudentHeader from './StudentHeader';

const Header = () => {
  const [authHeader, setAuthHeader] = useState<
    'unauth' | 'student' | 'teacher'
  >('unauth');
  useEffect(() => {
    setAuthHeader('unauth');
  }, []);

  const handleLogin = () => {
    setAuthHeader('student');
  };

  const handleLogout = () => {
    setAuthHeader('unauth');
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Логотип RepetitMe" />
      </div>
      {authHeader === 'unauth' && (
        <>
          <nav className={styles.menu}>
            <button className={styles.button}>Репетиторы</button>
            <button className={styles.button} onClick={handleLogin}>
              Войти
            </button>
            <button className={styles.telegram_button}>
              <div className={styles.svg}>
                <img src={telegramIcon} alt="Кнопка перехода в Telegram" />
              </div>
              <p className={styles.telegram_text}>Перейти в Telegram</p>
            </button>
          </nav>
        </>
      )}
      {authHeader === 'student' && <StudentHeader onLogout={handleLogout} />}
      {authHeader === 'teacher' && <TeacherHeader onLogout={handleLogout} />}
    </header>
  );
};
export default Header;
