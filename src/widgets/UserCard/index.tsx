import { IUserData, navOptions } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import StudentProfile from '../UserProfile/StudentProfile';
import TutorProfile from '../UserProfile/TutorProfile';

import styles from './index.module.scss';

const UserCard: React.FC<IUserData> = ({
  role,
  tutorData,
  studentData,
  handleSubmit,
  navOption
}) => {
  const isMyTutors = navOption === navOptions.myTutors;
  const isMyRequests = navOption === navOptions.myRequests;
  const isTutorRequests = navOption === navOptions.tutorRequests;
  return role === 'tutor' || role === 'unAuthorized' ? (
    // Карточка репетитора
    <div className={styles.card}>
      {tutorData ? <TutorProfile {...tutorData} /> : <p>Репетитор не найден</p>}
      <div className={styles.card__buttons}>
        <Button text="Подробнее" variant="white" />
        {!isMyTutors && (
          <Button
            text={
              !navOption
                ? 'Связаться'
                : isTutorRequests
                  ? 'Принять'
                  : 'Отменить заявку'
            }
            variant={!isMyRequests ? 'purple' : 'red'}
          />
        )}
      </div>
    </div>
  ) : role === 'student' ? (
    // Карточка ученика
    <div className={styles.card}>
      {studentData ? (
        <StudentProfile handleSubmit={handleSubmit ?? false} {...studentData} />
      ) : (
        <p>Ученик не найден</p>
      )}
      <div className={styles.card__buttons}>
        {!handleSubmit ? (
          <Button text="Создать отчет" variant="purple" />
        ) : (
          <>
            <Button text="Отклонить" variant="red" />
            <Button text="Принять" variant="purple" />
          </>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.card}>
      {tutorData ? (
        <TutorProfile {...tutorData} isCard={true} />
      ) : (
        <p>Репетитор не найден</p>
      )}
    </div>
  );
};

export default UserCard;
