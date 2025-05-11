import classNames from 'classnames';

import TG from '../../../assets/Group.svg';
import phone from '../../../assets/images/QR+button.svg';
import Button from '../button';

import styles from './index.module.scss';

interface ITelegramBlockProps {
  className?: string;
}

<<<<<<< HEAD:src/shared/components/TelegramBlock/index.tsx
const TelegramBlock: React.FC<ITelegramBlockProps> = ({ className }) => {
=======
const TelegramBlock: React.FC<ITelegramBlockProps> = ({ className }) => {
>>>>>>> origin/develop:src/shared/ui/telegramBlock/index.tsx
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
      />
    </div>
  );
};

export default TelegramBlock;
