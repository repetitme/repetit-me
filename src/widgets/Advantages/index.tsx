import { FC } from 'react';
import styles from './style.module.scss';
//import classNames from 'classnames';
import emojiMen from '../../assets/emoji-men.png';
import emojiWomen from '../../assets/emoji-women.png';

const Advantages: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__description}>
        <div
          className={
            styles.container__description_role +
            ' ' +
            styles.container__description_block
          }
        >
          <div className={styles.container__description_role_info}>
            <p>
              Любой пользователь приложения может одновременно быть как{' '}
              <a href="###" className={styles.link}>
                учеником
              </a>
              , так и преподавателем
            </p>
          </div>
          <img
            src={emojiMen}
            alt="Эмоджи"
            className={styles.container__description_role_emoji}
          />
        </div>

        <div
          className={
            styles.container__description_telegram +
            ' ' +
            styles.container__description_block
          }
        >
          <div className={styles.container__description_telegram_info}>
            <p>
              <a href="###" className={styles.link}>
                Telegram
              </a>{' '}
              стал незаменимым <br />в нашей жизни, и поэтому наш сервис
              работает{' '}
              <a href="###" className={styles.link}>
                внутри приложения
              </a>{' '}
              для вашего удобства
            </p>
          </div>
          <img
            src={emojiWomen}
            alt="Эмоджи"
            className={styles.container__description_telegram_emoji}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
