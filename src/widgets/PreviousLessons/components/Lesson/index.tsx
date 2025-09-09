import { ILesson } from './type.ts';

import styles from './index.module.scss';

export const Lesson: React.FC<ILesson> = ({
  lessonNumber,
  lessonPrice,
  lessonData,
  lessonTime,
  lessonDebt
}) => {
  const statusClassName =
    lessonDebt === undefined
      ? `${styles.lesson__status} ${styles.lesson__status_paid}`
      : `${styles.lesson__status} ${styles.lesson__status_unpaid}`;

  const statusText =
    lessonDebt === undefined
      ? 'Оплачено'
      : `Задолженность по комиссии: ${lessonDebt} руб.`;

  return (
    <div className={styles.lesson}>
      <p className={styles.lesson__title}>{lessonNumber}-е занятие</p>
      <p className={styles.lesson__mainText}>
        Стоимость занятия (за час):{' '}
        <span className={styles.lesson__secondaryText}>{lessonPrice} руб.</span>
      </p>
      <p className={styles.lesson__mainText}>
        Дата: <span className={styles.lesson__secondaryText}>{lessonData}</span>
      </p>
      <p className={styles.lesson__mainText}>
        Время:{' '}
        <span className={styles.lesson__secondaryText}>{lessonTime}</span>
      </p>
      <div className={statusClassName}>
        <p className={styles.lesson__status_text}>{statusText}</p>
      </div>
    </div>
  );
};
