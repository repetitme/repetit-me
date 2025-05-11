import React from 'react';

import cn from 'classnames';

import { ITutorData } from '../../shared/types/userData';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import { mockTutors } from './mockData';

import styles from './index.module.scss';

enum navOptions {
  myTutors = 'Мои репетиторы',
  myRequests = 'Заявки',
  tutorRequests = 'Запросы'
}

const StudentRequests: React.FC = () => {
  const [active, setActive] = React.useState(navOptions.myTutors);
  const onClick = (value: navOptions) => () => setActive(value);
  const [count, setCount] = React.useState(
    Object.values(navOptions).map(() => 0)
  );
  React.useEffect(() => {
    setCount(Object.values(navOptions).map(() => 0));
  }, []);

  const filter = () => mockTutors.filter((item) => item.status === active);

  return (
    <>
      <h2 className={styles.title}>Мои заявки</h2>
      <section className={styles.container}>
        <aside className={styles.sidebar}>
          <nav className={styles.tabs}>
            <ul className={styles.tabs__list}>
              {Object.values(navOptions).map((value) => (
                <li
                  key={value}
                  className={cn(styles.tabs__item, {
                    [styles.tabs__item_active]: active === value
                  })}
                >
                  <button className={styles.tabs__btn} onClick={onClick(value)}>
                    {value}
                  </button>
                  <span className={styles.tabs__count}>
                    {count[Object.values(navOptions).indexOf(value)]}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <TelegramBlock />
        </aside>
        <section className={styles.content}>
          {filter().map((tutor: ITutorData) => (
            <article key={tutor.id} className={styles.content__item}>
              <UserCard role="student" tutorData={tutor} handleSubmit={true} />
            </article>
          ))}
        </section>
      </section>
    </>
  );
};

export default StudentRequests;
