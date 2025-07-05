import React from 'react';

import cn from 'classnames';

import { ITutorData, navOptions } from '../../shared/types/userData';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import useStudentRequests from './useStudentRequests';

import styles from './index.module.scss';

const Requests: React.FC = () => {
  const {
    listHeight,
    active,
    loaded,
    tutorsList,
    count,
    visible,
    onClick,
    setVisible
  } = useStudentRequests();
  return (
    <main className={styles.wrapper}>
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
                  <span
                    className={cn(styles.tabs__count, {
                      [styles.tabs__count_active]: loaded.count
                    })}
                  >
                    {count[Object.values(navOptions).indexOf(value)]}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <TelegramBlock />
        </aside>
        {!loaded.count && (
          <div className={styles.loader}>
            <div className={styles.loader__spinner} />
          </div>
        )}
        <section
          className={cn(styles.content, {
            [styles.loading]: !loaded.content
          })}
          style={{ maxHeight: listHeight ? `${listHeight}px` : undefined }}
        >
          {loaded.content &&
            tutorsList[Object.values(navOptions).indexOf(active)]
              .slice(0, visible)
              .map((tutor: ITutorData) => (
                <article key={tutor.id} className={styles.content__item}>
                  <UserCard role="tutor" navOption={active} tutorData={tutor} />
                </article>
              ))}
          {visible <
            Number(count[Object.values(navOptions).indexOf(active)]) && (
            <button
              className={cn(styles.content__btn, {
                [styles.content__btn_active]: loaded.btn
              })}
              onClick={() => setVisible((prev) => prev + 3)}
            >
              <p>Показать ещё</p>
            </button>
          )}
        </section>
      </section>
    </main>
  );
};

export default Requests;
