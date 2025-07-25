import React from 'react';

import cn from 'classnames';

import { useAppContext } from '../../app/AppContext';
import {
  IStudentData,
  ITutorData,
  navOptions
} from '../../shared/types/userData';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import useStudentRequests from './useStudentRequests';

import styles from './index.module.scss';

const Requests: React.FC = () => {
  const { role } = useAppContext();
  const {
    listHeight,
    active,
    loaded,
    list,
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
              {Object.values(navOptions[role as keyof typeof navOptions]).map(
                (value) => (
                  <li
                    key={value}
                    className={cn(styles.tabs__item, {
                      [styles.tabs__item_active]: active === value
                    })}
                  >
                    <button
                      className={styles.tabs__btn}
                      onClick={onClick(value)}
                    >
                      {value}
                    </button>
                    <span
                      className={cn(styles.tabs__count, {
                        [styles.tabs__count_active]: loaded.count
                      })}
                    >
                      {
                        count[
                          Object.values(
                            navOptions[role as keyof typeof navOptions]
                          ).indexOf(value)
                        ]
                      }
                    </span>
                  </li>
                )
              )}
            </ul>
          </nav>
          <TelegramBlock />
        </aside>
        <div className={styles.content__wrapper}>
          {navOptions[role as keyof typeof navOptions].myRequests === active &&
            role === 'tutor' && (
              <div
                className={cn(styles.content__subtitle, {
                  [styles.content__subtitle_active]: loaded.content
                })}
              >
                {' '}
                Заявки учеников, которые выбрали вас напрямую
              </div>
            )}
          {navOptions[role as keyof typeof navOptions].tutorRequests ===
            active &&
            role === 'tutor' && (
              <div
                className={cn(styles.content__subtitle, {
                  [styles.content__subtitle_active]: loaded.content
                })}
              >
                Ученики, которые возможно вам подойдут
              </div>
            )}
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
              list[
                Object.values(
                  navOptions[role as keyof typeof navOptions]
                ).indexOf(active)
              ]
                .slice(0, visible)
                .map((person) => (
                  <article key={person.id} className={styles.content__item}>
                    <UserCard
                      role={role}
                      navOption={active}
                      tutorData={person as ITutorData}
                      studentData={person as IStudentData}
                      changeTab={onClick(
                        navOptions[role as keyof typeof navOptions].myList
                      )}
                    />
                  </article>
                ))}
            {visible <
              Number(
                count[
                  Object.values(
                    navOptions[role as keyof typeof navOptions]
                  ).indexOf(active)
                ]
              ) && (
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
        </div>
      </section>
    </main>
  );
};

export default Requests;
