import cn from 'classnames';

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
  const isMyList =
    navOption === navOptions[role as keyof typeof navOptions].myList;
  const isMyRequests =
    navOption === navOptions[role as keyof typeof navOptions].myRequests;
  const isTutorRequests =
    navOption === navOptions[role as keyof typeof navOptions].tutorRequests;
  return (
    <div className={cn(styles.card, role === 'card' && styles.card__resize)}>
      {role === 'tutor' || role === 'unauth' ? (
        // Карточка репетитора
        <>
          {tutorData ? (
            <TutorProfile {...tutorData} />
          ) : (
            <p>Репетитор не найден</p>
          )}
          <div className={styles.card__buttons}>
            <Button text="Подробнее" variant="white" />
            {!isMyList && (
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
        </>
      ) : role === 'student' ? (
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
            <div className={styles.card__small}>
              <TutorProfile
                {...tutorData}
                isCard={true}
                stylesValue={styles['card__small-avatar']}
              />
            </div>
          ) : (
            <p>Репетитор не найден</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserCard;
