import styles from './index.module.scss';

import { ILessonStudent } from './type';

export const LessonStudent: React.FC<ILessonStudent> = ({
  studentName,
  iconColor
}) => {
  return (
    <div className={styles.lessonStudent}>
      <div
        className={`${styles.lessonStudent__icon} ${styles[`lessonStudent__${iconColor}`]}`}
      >
        <p
          className={`${styles.lessonStudent__icon_text} ${styles[`lessonStudent__${iconColor}`]}`}
        >
          {studentName.charAt(0).toUpperCase()}
        </p>
      </div>
      <p className={styles.lessonStudent__name}>{studentName}</p>
    </div>
  );
};
