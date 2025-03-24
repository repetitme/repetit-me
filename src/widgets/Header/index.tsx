import styles from './index.module.scss';
import logo from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import TeacherHeader from './TeacherHeader';
import StudentHeader from './StudentHeader';
import { THeaderProps } from './types';
import icon from '../../assets/Group.svg';
import Button from '../../shared/button';


const Header: React.FC<THeaderProps> = ({ auth }) => {
  const [authHeader, setAuthHeader] = useState<
    'unauth' | 'student' | 'teacher'
  >(auth ? auth : 'unauth');

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
        <img src={logo} alt="Логотип RepetitMe" />
      </div>
      {authHeader === 'unauth' && (
        <nav className={styles.header__menu}>
          <button className={styles.header__button}>Репетиторы</button>
          <button className={styles.header__button} onClick={handleLogin}>
            Войти
          </button>
          <Button variant="social" text="Перейти в Telegram" icon={icon} />
        </nav>
      )}
      {authHeader === 'student' && <StudentHeader onLogout={handleLogout} />}
      {authHeader === 'teacher' && <TeacherHeader onLogout={handleLogout} />}
    </header>
  );
};

export default Header;
