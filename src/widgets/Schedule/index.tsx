import React from 'react';

import * as data from './data';
import useSchedule from './useSchedule';

import styles from './index.module.scss';

const Schedule: React.FC = () => {
  const { schedule, time, handleChange } = useSchedule();

  return (
    <section className={styles.wrapper}>
      <article className={styles.description}>
        <h2 className={styles.title}>{data.description.title}</h2>
        <p className={styles.text}>{data.description.text}</p>
      </article>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {time.map((time) => (
              <th key={time} className={styles.column}>
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.week.map((day) => (
            <tr key={day}>
              <th className={styles.row} scope="row">
                {day}
              </th>
              {time.map((time) => (
                <td key={time + day}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={!!schedule[day]?.[time]}
                    onChange={() => handleChange(day, time)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <span className={styles.info}>
        <div className={styles.info__item}>
          <div className={styles.box}></div>
          <p> {data.info[0]}</p>
        </div>
        <div className={styles.info__item}>
          <div className={styles.box}></div>
          <p> {data.info[1]}</p>
        </div>
      </span>
    </section>
  );
};

export default Schedule;
