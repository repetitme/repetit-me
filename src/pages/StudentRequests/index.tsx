import { FC, useEffect, useState } from 'react';

import cn from 'classnames';

import {
  IStudentProfile,
  ITutorData,
  navOptions
} from '../../shared/types/userData';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import { mockStudentProfile } from '../../widgets/UserCard/fakeApi/mockData';
import {
  getStudentProfile,
  getTutors
} from '../../widgets/UserCard/fakeApi/userApi';

import styles from './index.module.scss';

const loadedState = {
  content: true,
  count: true,
  btn: true
};

const StudentRequests: FC = () => {
  const requests = Object.values(navOptions);
  const [active, setActive] = useState(navOptions.myTutors);
  const [loaded, setLoaded] = useState(
    Object.fromEntries(
      Object.entries(loadedState).map(([key, value]) => [key, !value])
    )
  );
  const [tutorsList, setTutorsList] = useState<Array<ITutorData[]>>([
    [],
    [],
    []
  ]);
  const [count, setCount] = useState(['', '', '']);
  const [visible, setVisible] = useState(2);
  const onClick = (value: navOptions) => () => {
    if (active === value) return;
    setLoaded({ ...loadedState, content: false, btn: false });
    setActive(value);
    setTimeout(() => {
      setLoaded(loadedState);
    }, 200);
  };

  useEffect(() => {
    getStudentProfile(mockStudentProfile[0].id)
      .then((profile: IStudentProfile | undefined) => {
        if (profile && profile.requests) {
          setCount(
            requests.map((value) =>
              (profile.requests?.[value].ids.length || 0).toString()
            )
          );
        }
        setTimeout(
          () =>
            getTutors().then((tutors) => {
              const filtered = requests.map((key) => {
                return tutors.filter((tutor) => {
                  return profile?.requests?.[key].ids.includes(tutor.id);
                });
              });
              setTutorsList(filtered);
              setLoaded(loadedState);
            }),
          1000
        );
      })
      .catch((error) => {
        console.error('Ошибка при загрузке профиля студента:', error);
        setLoaded(loadedState);
      });
  }, []);

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
        <section
          className={cn(styles.content, {
            [styles.loading]: !loaded.content
          })}
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
              onClick={() => setVisible((prev) => prev + 5)}
            >
              <p>Показать ещё</p>
            </button>
          )}
        </section>
      </section>
    </main>
  );
};

export default StudentRequests;
