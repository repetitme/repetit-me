import React from 'react';

import Wrapper from '../../shared/ui/wrapper';
import * as data from './data';
import useSchedule from './useSchedule';

import styles from './index.module.scss';

import { TOnChange } from './types';

const Schedule: React.FC<TOnChange> = ({ onChange }) => {
  const {
    schedule,
    time,
    pressedMouse,
    active,
    handleActive,
    handleMouse,
    handleChange
  } = useSchedule({
    onChange
  });

  return (
    <Wrapper large>
      <section className={styles.wrapper}>
        <article className={styles.description}>
          <h2 className={styles.title}>{data.description.title}</h2>
          <p className={styles.text}>{data.description.text}</p>
        </article>
        <table
          onMouseDown={() => handleMouse(true)}
          onMouseUp={() => {
            handleMouse(false);
          }}
          onMouseLeave={() => handleMouse(false)}
          className={styles.table}
        >
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
                      onMouseEnter={() => {
                        if (pressedMouse) handleActive(day, time);
                      }}
                      onMouseDown={() => {
                        handleMouse(true);
                        handleActive(day, time);
                      }}
                      className={styles.checkbox}
                      style={{
                        transform: active.includes(day + time)
                          ? 'scale(1.1)'
                          : ''
                      }}
                      type="checkbox"
                      checked={!!schedule[day]?.[time]}
                      onChange={() => {
                        if (active.length !== 0) handleChange(day, time);
                      }}
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
    </Wrapper>
  );
};

export default Schedule;
