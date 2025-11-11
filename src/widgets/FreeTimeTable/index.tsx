import { FC } from 'react';

import cn from 'classnames';

import clock from '../../assets/icons/clock.svg';
import { IFreeTime } from '../../shared/types/userData';
import Time from '../Time';
import InfoBlock from '../infoBlock';

import styles from './index.module.scss';

interface IFreeTimeTable {
  setTime?: ({ day, time }: { day: string; time: string }) => void;
  selectedTime?: { day: string; time: string };
  freeTime: IFreeTime[];
}

const FreeTimeTable: FC<IFreeTimeTable> = ({
  setTime,
  selectedTime,
  freeTime
}) => {
  return (
    <InfoBlock title="Свободное время">
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
                      className={cn(styles.container__table_column_day_time, {
                        [styles.container__table_column_day_time_selected]:
                          time === selectedTime?.time &&
                          times.day === selectedTime?.day
                      })}
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(selectedTime?.day, selectedTime?.time);
                        setTime && setTime({ day: times.day, time: time });
                      }}
                      data-selected={
                        time === selectedTime?.time &&
                        times.day === selectedTime?.day
                      }
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
    </InfoBlock>
  );
};
export default FreeTimeTable;
