import { FC } from 'react';

import clock from '../../assets/icons/clock.svg';
import { IFreeTime } from '../../shared/types/userData';
import Time from '../Time';

import styles from './index.module.scss';

interface IFreeTimeTable {
  freeTime: IFreeTime[];
}

const FreeTimeTable: FC<IFreeTimeTable> = ({ freeTime }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Свободное время</h2>
      <div className={styles.container__local}>
        <img
          className={styles.container__local_clock}
          src={clock}
          alt="иконка часов"
        />
        <p className={styles.container__local_time}>
          <Time />
        </p>
      </div>
      <table className={styles.container__table}>
        <thead className={styles.container__table_head}>
          <tr className={styles.container__table_head_title}>
            {freeTime.map((day, index) => {
              return (
                <td
                  className={styles.container__table_head_title_text}
                  key={index}
                >
                  {day.day}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.container__table_column}>
          {freeTime.map((times, index) => {
            return (
              <tr className={styles.container__table_column_day} key={index}>
                {times.time.map((time, index) => {
                  return (
                    <td
                      className={styles.container__table_column_day_time}
                      key={index}
                    >
                      {time}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default FreeTimeTable;
