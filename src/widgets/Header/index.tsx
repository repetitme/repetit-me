import styles from './index.module.scss';
import logo from '../../assets/images/logo.svg';
import telegramIcon from '../../assets/images/telegramIcon.svg';
import { useEffect, useState } from 'react';
import TeacherHeader from './TeacherHeader';
import StudentHeader from './StudentHeader';
import { THeaderProps } from './types';
import classNames from 'classnames';

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
          <button className={classNames(styles['header__telegram--button'])}>
            <div className={styles.header__svg}>
              <img src={telegramIcon} alt="Кнопка перехода в Telegram" />
            </div>
            <p className={classNames(styles['header__telegram--text'])}>
              Перейти в Telegram
            </p>
          </button>
        </nav>
      )}
      {authHeader === 'student' && <StudentHeader onLogout={handleLogout} />}
      {authHeader === 'teacher' && <TeacherHeader onLogout={handleLogout} />}
    </header>
  );
};

export default Header;
