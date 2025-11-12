import { useEffect, useState } from 'react';

import cn from 'classnames';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import disciplineIcon from '../../assets/images/UserCardIcons/disciplines_icon.svg';
import studentCategory from '../../assets/images/UserCardIcons/student_category_icon.svg';
import tutorTask from '../../assets/images/UserCardIcons/tutors_task_icon.svg';
import { IStudentProfile, ITutorData } from '../../shared/types/userData';
import { navOptionsStudent } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import ButtonBack from '../../shared/ui/buttonBack';
import Loader from '../../shared/ui/loader';
import ParameterItem from '../../shared/ui/parameterItem';
import Popups from '../../shared/ui/popup';
import TutorRating from '../../shared/ui/tutorRating';
import AboutMe from '../../widgets/AboutMe';
import FeedbacksModal from '../../widgets/FeedbacksModal';
import FreeTimeTable from '../../widgets/FreeTimeTable';
import FreeTimeTableModal from '../../widgets/FreeTimeTableModal';
import TutorDiploma from '../../widgets/TutorDocuments';
import TutorVideoStart from '../../widgets/TutorVideoStart';
import { mockStudentProfile } from '../../widgets/UserCard/fakeApi/mockData';
import * as API from '../../widgets/UserCard/fakeApi/userApi';
import useStudentRequests from '../Requests/useStudentRequests';

import styles from './index.module.scss';

type RouteParams = {
  id: string;
};

const TutorPage = () => {
  const navigate = useNavigate();
  const params = useParams<RouteParams>();
  const { role } = useAppContext();
  const location = useLocation();

  const [dataState, setDataState] = useState<ITutorData>();
  const [isOpenModalStateFeedback, setOpenModalStateFeedback] = useState(false);
  const [isOpenModalStateFreeTime, setOpenModalStateFreeTime] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { acceptRequest, cancelRequest, request } = useStudentRequests();
  const [status, setStatus] = useState<
    'myTutors' | 'iRequested' | 'tutorRequested' | 'unauth' | 'new'
  >('new');

  const cancel = () => {
    cancelRequest(params.id!);
    setStatus('unauth');
  };

  const accept = () => {
    acceptRequest(params.id!);
    toggle();
  };

  const requestTutor = (day: string, time: string) => {
    request(params.id!, day, time);
    setStatus('myTutors');
    setConfirmationModal(true);
    console.log(day, time);
    console.log(dataState);
  };

  const formatExperience = (year: number) => {
    return `Стаж ${year} ${year === 1 ? 'год' : year > 1 && year < 5 ? 'года' : 'лет'}`;
  };

  const onToggleModalState = () => {
    setOpenModalStateFeedback(false);
    setOpenModalStateFreeTime(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (!params.id) return;
      API.getTutor(params.id).then((res) => setDataState(res));
      API.getProfile(mockStudentProfile[0].id, 'student').then((profile) => {
        if (!profile) return;
        if (role === 'unauth') setStatus('unauth');
        else {
          if (
            (
              (profile.requests as IStudentProfile['requests'])?.[
                navOptionsStudent.myList
              ]?.ids ?? []
            ).includes(params.id!)
          )
            setStatus('myTutors');
          if (
            (
              (profile.requests as IStudentProfile['requests'])?.[
                navOptionsStudent.myRequests
              ]?.ids ?? []
            ).includes(params.id!)
          )
            setStatus('iRequested');
          if (
            (
              (profile.requests as IStudentProfile['requests'])?.[
                navOptionsStudent.requests
              ]?.ids ?? []
            ).includes(params.id!)
          )
            setStatus('tutorRequested');
        }
      });
    };
    fetchData();
  }, [params.id, location.key]);
  if (!dataState)
    return (
      <>
        <div className={styles.back}>
          <ButtonBack text={'Вернуться назад'} onClick={() => navigate(-1)} />
        </div>
        <Loader />;
      </>
    );
  return (
    <>
      {isOpenModalStateFeedback && (
        <FeedbacksModal
          onClose={onToggleModalState}
          rating={dataState.rating}
          isOpen={isOpenModalStateFeedback}
        />
      )}
      {isOpenModalStateFreeTime && (
        <FreeTimeTableModal
          freeTime={dataState.freeTime}
          requestTutor={requestTutor}
          onClose={onToggleModalState}
          isOpen={isOpenModalStateFreeTime}
        />
      )}
      <div className={styles.container}>
        <ButtonBack text={'Вернуться назад'} onClick={() => navigate(-1)} />

        <main className={styles.container__profile}>
          <div className={styles.container__profile_contact}>
            <img
              className={styles.container__profile_contact_img}
              src={dataState.image}
              alt="Фото репетитора"
            />
            <div className={styles.container__profile_contact_connection}>
              {role === 'student' || role === 'tutor' ? (
                <div
                  className={
                    styles.container__profile_contact_connection_buttons
                  }
                >
                  {(status === 'tutorRequested' ||
                    status === 'unauth' ||
                    status === 'new') && (
                    <Button
                      text={status === 'new' ? 'Связаться' : 'Принять'}
                      variant={
                        status === 'new' || status === 'tutorRequested'
                          ? 'purple'
                          : 'red'
                      }
                      onClick={
                        status === 'new'
                          ? () => setOpenModalStateFreeTime(true)
                          : toggle
                      }
                    />
                  )}
                  {(status === 'tutorRequested' || status === 'iRequested') && (
                    <Button
                      text={
                        status === 'iRequested'
                          ? 'Отменить заявку'
                          : 'Отклонить'
                      }
                      variant="red"
                      onClick={() => setCancelModal(true)}
                    />
                  )}
                  {cancelModal &&
                    Popups.cancelRequest({
                      isOpen: cancelModal,
                      close: () => setCancelModal(false),
                      buttonOnClick: () => setCancelModal(false),
                      secondaryButtonOnClick: () => {
                        setCancelModal(false);
                        cancel();
                      }
                    })}
                  {status === 'iRequested' &&
                    Popups.responded({
                      isOpen,
                      close: toggle,
                      buttonOnClick: () => {
                        navigate('/requests');
                        accept();
                      },
                      buttonText: 'Мои заявки'
                    })}
                  {status !== 'new' &&
                    Popups.receivedRequest({
                      isOpen,
                      close: toggle,
                      buttonOnClick: accept,
                      buttonText: navOptionsStudent.myList
                    })}
                  {confirmationModal &&
                    Popups.responded({
                      isOpen: confirmationModal,
                      close: toggle,
                      buttonOnClick: () => {
                        navigate('/requests');
                      },
                      buttonText: 'Мои заявки'
                    })}
                </div>
              ) : (
                role === 'unauth' && (
                  <>
                    <Button
                      text="Связаться*"
                      variant="purple"
                      disabled={true}
                    />
                    <p
                      className={
                        styles.container__profile_contact_connection_text
                      }
                    >
                      *Кнопка станет активна после авторизации/регистрации
                    </p>
                  </>
                )
              )}
            </div>
          </div>

          <div className={styles.container__profile_info}>
            <div className={styles.container__profile_info_portrait}>
              <h2 className={styles.container__profile_info_portrait_name}>
                {dataState.name}
              </h2>
              <p className={styles.container__profile_info_portrait_status}>
                <span
                  className={
                    styles.container__profile_info_portrait_status_text
                  }
                >
                  {dataState.status}&nbsp;
                </span>
                <span
                  className={
                    styles.container__profile_info_portrait_status_years
                  }
                >
                  {formatExperience(dataState.experienceYears)}
                </span>
              </p>
              <div className={styles.container__profile_info_portrait_rating}>
                <TutorRating
                  variant="large"
                  rating={dataState?.rating ?? 0}
                  setOpenModalState={setOpenModalStateFeedback}
                  disabled={false}
                />
              </div>
              <p className={styles.container__profile_info_portrait_price}>
                от {dataState.price} руб./час
              </p>
              <div
                className={styles.container__profile_info_portrait_parameters}
              >
                <ParameterItem
                  src={disciplineIcon}
                  items={dataState?.subjects}
                />
                <ParameterItem
                  src={studentCategory}
                  items={dataState?.studentAudience}
                />
                <ParameterItem src={tutorTask} items={dataState.purpose} />
              </div>
            </div>
            <div
              className={styles.container__profile_info_portrait_autobiography}
            >
              <AboutMe
                textContent={dataState.autobiography}
                servicesList={dataState.servicesList}
              />
            </div>
            {dataState.documents[0] && (
              <TutorDiploma documents={dataState.documents} />
            )}
            {dataState.videoStart && (
              <TutorVideoStart video={dataState.videoStart} />
            )}
            <div
              className={cn(styles.container__profile_info_freeTime, {
                [styles.container__profile_info_freeTime_active]:
                  role === 'student'
              })}
              onClick={() => {
                setOpenModalStateFreeTime(!isOpenModalStateFreeTime);
              }}
            >
              <FreeTimeTable freeTime={dataState.freeTime} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default TutorPage;
