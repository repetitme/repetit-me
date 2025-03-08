import { FC } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';
import emojiMen from '../../assets/emoji-men.png';
import emojiWomen from '../../assets/emoji-women.png';

const Advantages: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__description}>
        <div
          className={classNames(
            styles['container__description--role'],
            styles['container__description_block']
          )}
        >
          <div
            className={classNames(styles['container__description--role-info'])}
          >
            <p>
              Любой пользователь приложения может одновременно быть как{' '}
              <a href="###" className={classNames(styles['link'])}>
                учеником
              </a>
              , так и преподавателем
            </p>
          </div>
          <img
            src={emojiMen}
            alt="Эмоджи"
            className={classNames(styles['container__description--role-emoji'])}
          />
        </div>

        <div
          className={classNames(
            styles['container__description--telegram'],
            styles['container__description_block']
          )}
        >
          <div
            className={classNames(
              styles['container__description--telegram-info']
            )}
          >
            <p>
              <a href="###" className={classNames(styles['link'])}>
                Telegram
              </a>{' '}
              стал незаменимым <br />в нашей жизни, и поэтому наш сервис
              работает{' '}
              <a href="###" className={classNames(styles['link'])}>
                внутри приложения
              </a>{' '}
              для вашего удобства
            </p>
          </div>
          <img
            src={emojiWomen}
            alt="Эмоджи"
            className={classNames(
              styles['container__description--telegram-emoji']
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
