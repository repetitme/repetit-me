import { Children } from 'react';

import styles from './index.module.scss';

import { ILesson } from './type';

export const Lesson: React.FC<ILesson> = ({ date, subject, children }) => {
  const childrenCount = Children.count(children);
  const hasMoreThanOneChildren = childrenCount > 1;

  return (
    <div className={styles.lesson}>
      <div className={styles.lesson__date}>
        <p className={styles.lesson__date_text}>{date}</p>
      </div>
      <div
        className={`${styles.lesson__item} ${hasMoreThanOneChildren ? styles.lesson__item_smallGap : ''}`}
      >
        <p className={styles.lesson__item_subject}>{subject}</p>
        {children}
      </div>
    </div>
  );
};
