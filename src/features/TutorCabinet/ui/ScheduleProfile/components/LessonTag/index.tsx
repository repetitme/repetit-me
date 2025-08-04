import styles from './index.module.scss';

import { ILessonTag } from './type';

export const LessonTag: React.FC<ILessonTag> = ({ lessonNumber }) => {
  const lastDigit = (index: number): string => {
    switch (index) {
      case 2:
      case 6:
      case 7:
      case 8:
        return 'ой';
      case 3:
        return 'ий';
      default:
        return 'ый';
    }
  };

  const ending = lastDigit(lessonNumber);

  return (
    <div className={styles.lessonTag}>
      <p className={styles.lessonTag__text}>
        {lessonNumber}-{ending} урок
      </p>
    </div>
  );
};
