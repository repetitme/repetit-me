import { Lesson } from './components/Lesson';
import { LessonStudent } from './components/LessonStudent';
import { LessonTag } from './components/LessonTag';
import { LessonsList } from './components/LessonsList';
import { ScheduleContainer } from './components/ScheduleContainer';

import styles from './index.module.scss';

import { ISchedule } from './type';

export const Schedule: React.FC<ISchedule> = ({
  firstLessons,
  scheduleLessons
}) => {
  return (
    <div className={styles.container}>
      <ScheduleContainer
        title="Первые уроки"
        tagName="Занятия не начались"
        tagColor="red"
      >
        <LessonsList>
          {firstLessons.map((lesson, index) => (
            <Lesson key={index} date={lesson.date} subject={lesson.subject}>
              <LessonStudent
                studentName={lesson.studentName}
                iconColor={lesson.color}
              />
            </Lesson>
          ))}
        </LessonsList>
      </ScheduleContainer>

      <ScheduleContainer
        title="Расписание уроков"
        tagName="Занятия начались"
        tagColor="green"
      >
        <LessonsList>
          {scheduleLessons.map((lesson, index) => (
            <Lesson key={index} date={lesson.date} subject={lesson.subject}>
              {lesson.lessonNumber && (
                <LessonTag lessonNumber={lesson.lessonNumber} />
              )}
              <LessonStudent
                studentName={lesson.studentName}
                iconColor={lesson.color}
              />
            </Lesson>
          ))}
        </LessonsList>
      </ScheduleContainer>
    </div>
  );
};
