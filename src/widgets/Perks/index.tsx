import classNames from 'classnames';

import Boy from '../../assets/images/perksBoy.png';
import Girl from '../../assets/images/perksGirl.png';
import ChatBubble from '../../shared/components/ChatBubble';
import InfoBlock from '../../shared/components/InfoBlock';
import { perks } from './data';

import styles from './index.module.scss';

type TPerksProps = {
  variant?: 'student' | 'teacher'; // меняется раскладка и текст картинки
};

export const Perks: React.FC<TPerksProps> = ({ variant }) => {
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
        {perks.map((perk) => (
          <InfoBlock key={perk.title} title={perk.title} text={perk.text} />
        ))}
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
export default Perks;
