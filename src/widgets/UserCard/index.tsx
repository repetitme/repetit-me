import { IUserData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import StudentProfile from '../UserProfile/StudentProfile';
import TutorProfile from '../UserProfile/TutorProfile';

import styles from './index.module.scss';

const UserCard: React.FC<IUserData> = ({
  role,
  tutorData,
  studentData,
  handleSubmit
}) => {
  return (
    <div className={styles.card}>
      {role === 'student' || role === 'unauthorized' ? (
        // Карточка репетитора
        <>
          {tutorData ? (
            <TutorProfile {...tutorData} />
          ) : (
            <p>Репетитор не найден</p>
          )}
          <div className={styles.card__buttons}>
            <Button text="Подробнее" variant="white" />
            {role === 'student' &&
              (!handleSubmit ? (
                <Button text="Связаться" variant="purple" />
              ) : (
                <Button text="Отменить заявку" variant="red" />
              ))}
          </div>
        </>
      ) : role === 'teacher' ? (
        // Карточка ученика
        <>
          {studentData ? (
            <StudentProfile
              handleSubmit={handleSubmit ?? false}
              {...studentData}
            />
          ) : (
            <p>Ученик не найден</p>
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
        </>
      ) : (
        // Маленькая карточка
        <>
          {tutorData ? (
            <TutorProfile
              {...tutorData}
              isCard={true}
              stylesValue={styles['card__small-avatar']}
            />
          ) : (
            <p>Репетитор не найден</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserCard;
