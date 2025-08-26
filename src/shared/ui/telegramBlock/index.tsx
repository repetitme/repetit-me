import classNames from 'classnames';

import phone from '../../../assets/images/QR+button.svg';
import TG from '../../../assets/images/telegram_icon.svg';
import Button from '../button';

import styles from './index.module.scss';

interface ITelegramBlockProps {
  className?: string;
}
const TelegramBlock = ({ className }: ITelegramBlockProps) => {
  const handleTelegramClick = () => {
    window.open('tg://resolve?domain=RepetitMe_bot', '_blank');

    setTimeout(() => {
      window.open('https://t.me/RepetitMe_bot', '_blank');
    }, 200);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <h4 className={styles.title}>
        Переходите в <span className={styles.accent}>Телеграм</span> — с ним еще
        удобнее
      </h4>
      <img src={phone} alt="изображения телефона с QR кодом" />
      <Button
        text="Перейти в Telegram"
        variant="social"
        href="#"
        icon={TG}
        size="large"
        className={styles.btn}
        onClick={handleTelegramClick}
      />
    </div>
  );
};

export default TelegramBlock;
