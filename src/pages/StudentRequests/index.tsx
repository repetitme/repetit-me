import React from 'react';

import cn from 'classnames';

import TelegramBlock from '../../shared/components/TelegramBlock';
import UserCard from '../../widgets/UserCard';

import styles from './index.module.scss';

enum navOptions {
  myTutors = 'Мои репетиторы',
  myRequests = 'Заявки',
  tutorRequests = 'Запросы'
}

const StudentRequests: React.FC = () => {
  const [active, setActive] = React.useState(navOptions.myTutors);
  const onClick = (value: navOptions) => () => setActive(value);
  return (
    <>
      <h2 className={styles.title}>Мои заявки</h2>
      <section className={styles.container}>
        <aside className={styles.sidebar}>
          <nav className={styles.tabs}>
            <ul className={styles.tabs__list}>
              <li
                className={cn(styles.tabs__item, {
                  [styles.tabs__item_active]: active === navOptions.myTutors
                })}
              >
                <button
                  className={styles.tabs__btn}
                  onClick={onClick(navOptions.myTutors)}
                >
                  Мои репетиторы
                </button>
                <span className={styles.tabs__count}>3</span>
              </li>
              <li
                className={cn(styles.tabs__item, {
                  [styles.tabs__item_active]: active === navOptions.myRequests
                })}
              >
                <button
                  className={styles.tabs__btn}
                  onClick={onClick(navOptions.myRequests)}
                >
                  Заявки
                </button>
                <span className={styles.tabs__count}>3</span>
              </li>
              <li
                className={cn(styles.tabs__item, {
                  [styles.tabs__item_active]:
                    active === navOptions.tutorRequests
                })}
              >
                <button
                  className={styles.tabs__btn}
                  onClick={onClick(navOptions.tutorRequests)}
                >
                  Запросы
                </button>
                <span className={styles.tabs__count}>3</span>
              </li>
            </ul>
          </nav>
          <TelegramBlock />
        </aside>
        <section className={styles.content}>
          <UserCard role="student" />
        </section>
      </section>
    </>
  );
};

export default StudentRequests;
