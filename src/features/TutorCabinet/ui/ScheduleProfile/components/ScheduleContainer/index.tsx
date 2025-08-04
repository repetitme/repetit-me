import styles from './index.module.scss';

import { IScheduleContainer } from './type';

export const ScheduleContainer: React.FC<IScheduleContainer> = ({
  title,
  tagName,
  children
}) => {
  const color = tagName === 'Занятия начались' ? 'green' : 'red';

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleContainer__title}>
        <p className={styles.scheduleContainer__title_text}>{title}</p>
        <div
          className={`${styles.scheduleContainer__title_tag} ${styles[`scheduleContainer__title_tag_${color}`]}`}
        >
          <p
            className={`${styles.scheduleContainer__title_tag_text} ${styles[`scheduleContainer__title_tag_${color}`]}`}
          >
            {tagName}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
