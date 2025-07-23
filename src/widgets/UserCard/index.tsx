import { useState } from 'react';

import cn from 'classnames';

import {
  IUserData,
  navOptionsStudent,
  navOptionsTutor
} from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import Popups from '../../shared/ui/popup';
import TutorDialogs from '../TutorDialogs';
import { TutorDialogsVariant } from '../TutorDialogs/constants';
import StudentProfile from '../UserProfile/StudentProfile';
import TutorProfile from '../UserProfile/TutorProfile';

import styles from './index.module.scss';

const UserCard: React.FC<IUserData> = ({
  role,
  tutorData,
  studentData,
  handleSubmit,
  navOption,
  changeTab
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navRole = role === 'tutor' ? navOptionsTutor : navOptionsStudent;
  const isMyList = navOption === navRole.myList;
  const isMyRequests = navOption === navRole.myRequests;
  const isTutorRequests = navOption === navRole.tutorRequests;
  const report =
    studentData?.workingStatus === 'Занятия не начались'
      ? TutorDialogsVariant.arrangement
      : (studentData?.lessonsCompleted ?? 0) > 1
        ? TutorDialogsVariant.report
        : TutorDialogsVariant.hadFirstClass;
  const handleChangeTab = () => {
    if (changeTab) {
      changeTab(navRole.myList);
      close();
    }
  };

  const handleAccept = (isAccepted: boolean) => {
    setIsAccepted(isAccepted);
    toggle();
  };
  return (
    <div className={cn(styles.card, role === 'card' && styles.card__resize)}>
      {role === 'student' || role === 'unauth' ? (
        // Карточка репетитора для ученика или незарегистрированного пользователя
        <>
          {tutorData ? (
            <TutorProfile {...tutorData} />
          ) : (
            <p>Репетитор не найден</p>
          )}
          <div className={styles.card__buttons}>
            <Button
              text="Подробнее"
              variant="white"
              onClick={() => console.log('Подробнее')}
            />
            {!isMyList && (
              <>
                <Button
                  text={
                    !navOption
                      ? 'Связаться'
                      : isTutorRequests
                        ? 'Принять'
                        : 'Отменить заявку'
                  }
                  variant={!isMyRequests ? 'purple' : 'red'}
                  onClick={toggle}
                />
                {!navOption
                  ? Popups.responded({
                      isOpen,
                      close: toggle,
                      buttonOnClick: toggle,
                      secondaryButtonOnClick: toggle
                    })
                  : isTutorRequests
                    ? Popups.receivedRequest({
                        isOpen,
                        close: toggle,
                        buttonOnClick: handleChangeTab,
                        buttonText: navOptionsStudent.myList
                      })
                    : Popups.cancelRequest({
                        isOpen,
                        close: toggle,
                        buttonOnClick: toggle,
                        secondaryButtonOnClick: () => {
                          toggle();
                        }
                      })}
              </>
            )}
          </div>
        </>
      ) : role === 'tutor' ? (
        // Карточка ученика для репетитора
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
            {isMyList ? (
              <>
                <Button
                  text="Создать отчет"
                  onClick={toggle}
                  variant="purple"
                />
                {(studentData?.lessonsCompleted ?? 0) > 1 && (
                  <Button
                    text="Подробнее"
                    variant="white"
                    onClick={() => {
                      console.log('Подробнее');
                    }}
                  />
                )}
              </>
            ) : (
              <>
                <Button
                  text="Отклонить"
                  variant="red"
                  onClick={() => handleAccept(false)}
                />
                <Button
                  text="Принять"
                  variant="purple"
                  onClick={() => handleAccept(true)}
                />
                {!isMyList && isAccepted
                  ? Popups.receivedRequest({
                      isOpen,
                      close: toggle,
                      buttonOnClick: toggle,
                      secondaryButtonOnClick: toggle
                    })
                  : Popups.rejectTutor({
                      isOpen,
                      close: toggle,
                      buttonOnClick: toggle,
                      secondaryButtonOnClick: toggle
                    })}
              </>
            )}
          </div>
          {isMyList && (
            <TutorDialogs isOpen={isOpen} close={toggle} variant={report} />
          )}
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
