import { useState } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import useStudentRequests from '../../pages/Requests/useStudentRequests';
import {
  IUserData,
  navOptionsStudent,
  navOptionsTutor
} from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import Popups from '../../shared/ui/popup';
import FreeTimeTableModal from '../FreeTimeTableModal';
import TutorDialogs from '../TutorDialogs';
import { TutorDialogsVariant } from '../TutorDialogs/constants';
import StudentProfile from '../UserProfile/StudentProfile';
import TutorProfile from '../UserProfile/TutorProfile';

import styles from './index.module.scss';

const UserCard: React.FC<IUserData> = ({
  role,
  tutorData,
  studentData,
  cancelRequest,
  acceptRequest,
  navOption,
  changeTab
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const { request } = useStudentRequests();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const cancel = () => {
    if (cancelRequest) {
      if (tutorData) {
        cancelRequest(tutorData.id);
      } else if (studentData) {
        cancelRequest(studentData.id);
      }
    }
    toggle();
  };
  const accept = () => {
    if (acceptRequest) {
      if (tutorData) {
        changeTab?.();
        acceptRequest(tutorData.id);
      } else if (studentData) {
        acceptRequest(studentData.id);
      }
    }
    toggle();
  };
  const navRole = role === 'tutor' ? navOptionsTutor : navOptionsStudent;
  const isMyList = navOption === navRole.myList;
  const isMyRequests = navOption === navRole.myRequests;
  const isRequests = navOption === navRole.requests;
  const navigate = useNavigate();
  const report =
    studentData?.workingStatus === 'Занятия не начались'
      ? TutorDialogsVariant.arrangement
      : (studentData?.lessonsCompleted ?? 0) > 1
        ? TutorDialogsVariant.report
        : TutorDialogsVariant.hadFirstClass;
  const handleChangeTab = () => {
    if (changeTab) {
      accept();
      close();
    }
  };
  const handleAccept = (isAccepted: boolean) => {
    setIsAccepted(isAccepted);
    toggle();
  };
  const requestTutor = () => {
    request(tutorData!.id);
    setConfirmationModal(true);
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
              onClick={() => navigate(`/tutor-catalog/${tutorData?.id}`)}
            />
            {!isMyList && (
              <>
                {role !== 'unauth' && (
                  <Button
                    text={
                      !navOption
                        ? 'Связаться'
                        : isRequests
                          ? 'Принять'
                          : 'Отменить заявку'
                    }
                    variant={!isMyRequests ? 'purple' : 'red'}
                    onClick={toggle}
                  />
                )}
                {!navOption ? (
                  <FreeTimeTableModal
                    isOpen={isOpen}
                    onClose={toggle}
                    requestTutor={requestTutor}
                    freeTime={tutorData!.freeTime}
                  />
                ) : isRequests ? (
                  Popups.receivedRequest({
                    isOpen,
                    close: toggle,
                    buttonOnClick: handleChangeTab,
                    buttonText: navOptionsStudent.myList
                  })
                ) : (
                  Popups.cancelRequest({
                    isOpen,
                    close: toggle,
                    buttonOnClick: toggle,
                    secondaryButtonOnClick: cancel
                  })
                )}
                {confirmationModal &&
                  Popups.responded({
                    isOpen: confirmationModal,
                    close: () => setConfirmationModal(false),
                    buttonOnClick: () => {
                      navigate('/requests');
                    },
                    buttonText: 'Мои заявки'
                  })}
              </>
            )}
          </div>
        </>
      ) : role === 'tutor' ? (
        // Карточка ученика для репетитора
        <>
          {studentData ? (
            <StudentProfile handleSubmit={false} {...studentData} />
          ) : (
            <p>Ученик не найден</p>
          )}
          <div className={styles.card__buttons}>
            {isMyList ? (
              <>
                {(studentData?.lessonsCompleted ?? 0) > 1 && (
                  <Button
                    text="Подробнее"
                    variant="white"
                    onClick={() => {
                      navigate(`/tutor-student/${studentData?.id}`, {
                        state: { background: true }
                      });
                    }}
                  />
                )}
                <Button
                  text="Создать отчет"
                  onClick={toggle}
                  variant="purple"
                />
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
                  ? Popups.acceptRequest({
                      isOpen,
                      close: toggle,
                      buttonText: 'Отмена',
                      buttonOnClick: toggle,
                      secondaryButtonText: 'Далее',
                      secondaryButtonOnClick: accept
                    })
                  : Popups.rejectTutor({
                      isOpen,
                      close: toggle,
                      buttonOnClick: toggle,
                      secondaryButtonOnClick: cancel
                    })}
              </>
            )}
          </div>
          {isMyList && (
            <TutorDialogs
              isOpen={isOpen}
              close={toggle}
              variant={report}
              id={studentData?.id}
            />
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
