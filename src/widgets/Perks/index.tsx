import classNames from 'classnames';
import styles from './index.module.scss';

import Boy from '../../assets/images/perksBoy.png';
import Girl from '../../assets/images/perksGirl.png';
import { InfoBlock } from '../../shared/components/InfoBlock';
import { ChatBubble } from '../../shared/components/ChatBubble';

type TPerksProps = {
  variant?: 'student' | 'teacher'; // меняется раскладка и текст картинки
};

export const Perks: React.FC<TPerksProps> = ({ variant = 'student' }) => {
  const chatBubbleText =
    variant === 'student'
      ? 'Я знаю где найти классного репетитора'
      : 'Я знаю где найти новых учеников';

  return (
    <div
      className={classNames(styles.container, {
        [styles['container--reverse']]: variant === 'teacher'
      })}
    >
      <div className={styles.info}>
        <InfoBlock title="Быстрый">
          От заявки до связи с репетитором меньше 5 минут
        </InfoBlock>
        <InfoBlock title="Удобный">
          Подбор и связь с учеником происходит в одном месте
        </InfoBlock>
        <InfoBlock title="Безопасный">
          Вам не нужно придумывать пароль, подтверждение аккаунта происходит
          через код, который приходит вам на телефон 
        </InfoBlock>
      </div>
      <div className={styles.emoji}>
        <img
          className={classNames(
            styles['emoji__student'],
            styles['emoji__student--boy']
          )}
          src={Boy}
          alt="Мальчик что-то говорит девочке"
        />
        <img
          className={classNames(
            styles['emoji__student'],
            styles['emoji__student--girl']
          )}
          src={Girl}
          alt="Девочка слушает мальчика"
        />
        <ChatBubble children={chatBubbleText} />
      </div>
    </div>
  );
};
