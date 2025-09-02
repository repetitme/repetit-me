import boy1 from '../../assets/images/memoji=boy1.png';
import boy2 from '../../assets/images/memoji=boy2.png';
import girl1 from '../../assets/images/memoji=girl.png';

import styles from './index.module.scss';

import { ListItemProps } from '../../shared/ui/listItem/type';

export const listItems: ListItemProps[] = [
  {
    number: '01',
    title: 'Понятный интерфейс',
    text: (
      <p>
        Любой пользователь приложения может одновременно быть как
        <span className={styles.accentText}>учеником</span>, так и
        <span className={styles.accentText}>преподавателем</span>.
      </p>
    ),
    image: boy1,
    alt: 'Мальчик улыбается'
  },
  {
    number: '02',
    title: 'В ногу со временем',
    text: (
      <>
        <p>
          <span className={styles.accentText}>Telegram</span> стал незаменимым в
          нашей жизни, и поэтому наш сервис работает внутри приложения для
          вашего удобства.
        </p>
        <p>
          И никаких звонков от операторов! Отчет по заявке собирается через бота
          в удобной форме
        </p>
      </>
    ),
    image: girl1,
    alt: 'Девочка рукой имитирует звонок по телефону'
  },
  {
    number: '03',
    title: 'Низкая комиссия',
    text: (
      <p>
        Сервис удерживает комиссию 10% от суммы занятия, что
        <span className={styles.accentText}> в 2 раза ниже </span>
        конкурентов. Комиссия уменьшается при долгосрочном сотрудничестве
      </p>
    ),
    image: boy2,
    alt: 'Мальчик показывает жест экономии, скрестив два пальца'
  }
];
