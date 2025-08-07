import { Lesson } from './components/Lesson';
import { LessonStudent } from './components/LessonStudent';
import { LessonTag } from './components/LessonTag';
import { LessonsList } from './components/LessonsList';
import { ScheduleContainer } from './components/ScheduleContainer';

import styles from './index.module.scss';

import { IScheduleProfile } from './type';

const ScheduleProfile = ({
  firstLessons,
  scheduleLessons
}: IScheduleProfile) => {
  const nameList: string[] = [];

  const colorClasses = ['purple', 'pink', 'yellow', 'blue', 'green'];

  const getColorClass = (name: string): any => {
    if (!nameList.includes(name)) {
      nameList.push(name);
    }

    const colorIndex = nameList.indexOf(name) % colorClasses.length;
    return colorClasses[colorIndex];
  };

  return (
    <div className={styles.container}>
      <ScheduleContainer title="Первые уроки" tagName="Занятия не начались">
        <LessonsList>
          {firstLessons.map((lesson, index) => (
            <Lesson key={index} date={lesson.date} subject={lesson.subject}>
              <LessonStudent
                studentName={lesson.studentName}
                iconColor={getColorClass(lesson.studentName)}
              />
            </Lesson>
          ))}
        </LessonsList>
      </ScheduleContainer>

      <ScheduleContainer title="Расписание уроков" tagName="Занятия начались">
        <LessonsList>
          {scheduleLessons.map((lesson, index) => (
            <Lesson key={index} date={lesson.date} subject={lesson.subject}>
              {lesson.lessonNumber && (
                <LessonTag lessonNumber={lesson.lessonNumber} />
              )}
              <LessonStudent
                studentName={lesson.studentName}
                iconColor={getColorClass(lesson.studentName)}
              />
            </Lesson>
          ))}
        </LessonsList>
      </ScheduleContainer>
    </div>
  );
};

export default ScheduleProfile;
