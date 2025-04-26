import Button from '../../shared/button';
import { IUserData } from '../../shared/types/userData';
import StudentProfile from '../UserProfile/StudentProfile';
import TutorProfile from '../UserProfile/TutorProfile';

import styles from './index.module.scss';

const UserCard: React.FC<IUserData> = ({
  role,
  tutorData,
  studentData,
  handleSubmit
}) => {
  return role === 'student' || role === 'unAuthorized' ? ( // Карточка репетитора
    <div className={styles.card}>
      {tutorData ? <TutorProfile {...tutorData} /> : <p>Репетитор не найден</p>}
      <div className={styles.card__buttons}>
        <Button text="Подробнее" variant="white" />
        {role === 'student' &&
          (!handleSubmit ? (
            <Button text="Связаться" variant="purple" />
          ) : (
            <Button text="Отменить заявку" variant="red" />
          ))}
      </div>
    </div>
  ) : role === 'tutor' ? (
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
