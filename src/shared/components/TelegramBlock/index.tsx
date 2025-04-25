import classNames from 'classnames';

import TG from '../../../assets/Group.svg';
import phone from '../../../assets/images/QR+button.svg';
import Button from '../../Button';

import styles from './index.module.scss';

interface ITelegramBlockProps {
  className?: string;
}

export const TelegramBlock: React.FC<ITelegramBlockProps> = ({ className }) => {
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
