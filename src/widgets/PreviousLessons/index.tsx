import { Lesson } from './components/Lesson/index.tsx';
import { LessonsList } from './components/LessonsList/index.tsx';
import { IPreviousLessons } from './type.ts';

import styles from './index.module.scss';

export const PreviousLessons: React.FC<IPreviousLessons> = ({
  lessonsListPaid,
  lessonsListUnpaid
}) => {
  return (
    <div className={styles.previousLessons}>
      <p className={styles.previousLessons__title}>Предыдущие занятия</p>
      <LessonsList status="unpaid">
        {lessonsListUnpaid.map((lesson, index) => (
          <Lesson
            key={index}
            lessonNumber={lesson.lessonNumber}
            lessonPrice={lesson.lessonPrice}
            lessonData={lesson.lessonData}
            lessonTime={lesson.lessonTime}
            lessonDebt={lesson.lessonDebt}
          ></Lesson>
        ))}
      </LessonsList>
      <div className={styles.previousLessons__divider}></div>
      <LessonsList status="paid">
        {lessonsListPaid.map((lesson, index) => (
          <Lesson
            key={index}
            lessonNumber={lesson.lessonNumber}
            lessonPrice={lesson.lessonPrice}
            lessonData={lesson.lessonData}
            lessonTime={lesson.lessonTime}
          ></Lesson>
        ))}
      </LessonsList>
    </div>
  );
};

export default PreviousLessons;
