import styles from './styles.module.css';
import logo from '../../assets/images/logo.png';
import telegramIcon from '../../assets/images/telegramIcon.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Логотип" />
      </div>
      <div className={styles.menu}>
        <button className={styles.button}>Репетиторы</button>
        <button className={styles.button}>Войти</button>
        <button className={styles.telegram_button}>
          <div className={styles.svg}>
            <img src={telegramIcon} alt="Telegram" />
          </div>
          <p className={styles.telegram_text}>Перейти в Telegram</p>
        </button>
      </div>
    </header>
  );
};
export default Header;
