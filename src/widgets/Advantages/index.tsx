import { FC } from 'react';
import styles from './style.module.scss';
//import classNames from 'classnames';
import emojiMen from '../../assets/images/emoji_men.svg';
import emojiWomen from '../../assets/images/emoji_women.svg';

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
              <span className={styles.accent}>учеником</span>, так и
              преподавателем
            </p>
          </div>
          <div className={styles.container__description_role_img}>
            <img
              src={emojiMen}
              alt="Эмоджи"
              className={styles.container__description_role_img_emoji}
            />
          </div>
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
              <span className={styles.accent}>Telegram</span> стал незаменимым
              <br /> в нашей жизни, и поэтому наш сервис работает{' '}
              <span className={styles.accent}>внутри приложения</span> для
              вашего удобства
            </p>
          </div>
          <div className={styles.container__description_telegram_img}>
            <img
              src={emojiWomen}
              alt="Эмоджи"
              className={styles.container__description_telegram_img_emoji}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
