import { FC } from 'react';
import styles from './index.module.scss';

import clock from '../../assets/icons/clock.svg';
import Time from '../Time';

import { freeTime } from './data';

const FreeTimeTable: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Свободное время</h2>
      <div className={styles.container__local}>
        <img className={styles.container__local_clock} src={clock} />
        <p className={styles.container__local_time}>
          <Time />
        </p>
      </div>
      <table className={styles.container__table}>
        <thead className={styles.container__table_head}>
          <tr className={styles.container__table_head_title}>
            {freeTime.map((day) => {
              return (
                <td className={styles.container__table_head_title_text}>
                  {day.day}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.container__table_column}>
          {freeTime.map((times) => {
            return (
              <tr className={styles.container__table_column_day}>
                {times.time.map((time) => {
                  return (
                    <td className={styles.container__table_column_day_time}>
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
