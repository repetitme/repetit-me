import styles from './index.module.scss';

import { IScheduleContainer } from './type';

export const ScheduleContainer: React.FC<IScheduleContainer> = ({
  title,
  tagName,
  tagColor,
  children
}) => {
  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleContainer__title}>
        <p className={styles.scheduleContainer__title_text}>{title}</p>
        <div
          className={`${styles.scheduleContainer__title_tag} ${styles[`scheduleContainer__title_tag_${tagColor}`]}`}
        >
          <p
            className={`${styles.scheduleContainer__title_tag_text} ${styles[`scheduleContainer__title_tag_${tagColor}`]}`}
          >
            {tagName}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
