import ScheduleProfile from "../../features/TutorCabinet/ui/ScheduleProfile"

import styles from './index.module.scss';

const TutorStudentPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.profile__image}></div>
      <div className={styles.missingComponent}></div>
      <ScheduleProfile firstLessons={[]} scheduleLessons={[]}></ScheduleProfile>
    </div>
  );
};

export default TutorStudentPage;
