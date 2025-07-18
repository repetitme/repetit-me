import { useEffect, useState } from 'react';

import cn from 'classnames';

import { IUserData, navOptions } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import TutorDialogs from '../TutorDialogs';
import { TutorDialogsVariant } from '../TutorDialogs/data';
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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navRole = role === 'tutor' ? 'tutor' : 'student';
  const isMyList =
    navOption === navOptions[navRole as keyof typeof navOptions].myList;
  const isMyRequests =
    navOption === navOptions[navRole as keyof typeof navOptions].myRequests;
  const isTutorRequests =
    navOption === navOptions[navRole as keyof typeof navOptions].tutorRequests;
  const report =
    studentData?.workingStatus === 'Занятия не начались'
      ? TutorDialogsVariant.arrangement
      : (studentData?.lessonsCompleted ?? 0) > 1
        ? TutorDialogsVariant.report
        : TutorDialogsVariant.hadFirstClass;

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
              <>
                <Button
                  text="Создать отчет"
                  onClick={toggle}
                  variant="purple"
                />
                {(studentData?.lessonsCompleted ?? 0) > 1 && (
                  <Button text="Подробнее" variant="white" />
                )}
              </>
            ) : (
              <>
                <Button text="Отклонить" variant="red" />
                <Button text="Принять" variant="purple" />
              </>
            )}
          </div>
          <TutorDialogs isOpen={isOpen} close={toggle} variant={report} />
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
