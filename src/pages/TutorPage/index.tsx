import { useEffect, useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import disciplineIcon from '../../assets/images/UserCardIcons/disciplines_icon.svg';
import studentCategory from '../../assets/images/UserCardIcons/student_category_icon.svg';
import tutorTask from '../../assets/images/UserCardIcons/tutors_task_icon.svg';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import ButtonBack from '../../shared/ui/buttonBack';
import ParameterItem from '../../shared/ui/parameterItem';
import Spinner from '../../shared/ui/spinner';
import TutorRating from '../../shared/ui/tutorRating';
import AboutMe from '../../widgets/AboutMe';
import FeedbacksModal from '../../widgets/FeedbacksModal';
import FreeTimeTable from '../../widgets/FreeTimeTable';
import FreeTimeTableModal from '../../widgets/FreeTimeTableModal';
import TutorDiploma from '../../widgets/TutorDocuments';
import TutorVideoStart from '../../widgets/TutorVideoStart';
import * as API from '../../widgets/UserCard/fakeApi/userApi';

import styles from './index.module.scss';

type RouteParams = {
  id: string;
};

const TutorPage = () => {
  const navigate = useNavigate();

  const [isOpenModalStateFeedback, setOpenModalStateFeedback] = useState(false);
  const [isOpenModalStateFreeTime, setOpenModalStateFreeTime] = useState(false);

  const [dataState, setDataState] = useState<ITutorData>();
  const params = useParams<RouteParams>();

  const formatExperience = (year: number) => {
    return `Стаж ${year} ${year === 1 ? 'год' : year > 1 && year < 5 ? 'года' : 'лет'}`;
  };

  const onToggleModalState = () => {
    setOpenModalStateFeedback(false);
    setOpenModalStateFreeTime(false);
  };

  const { role } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (!params.id) return;
      const tutorInfo = await API.getTutor(params.id);
      setDataState(tutorInfo);
    };
    fetchData();
  }, [params.id, location.key]);
  if (!dataState)
    return (
      <>
        <div className={styles.back}>
          <ButtonBack
            text={'Вернуться назад'}
            onClick={() => navigate(`/tutor-catalog`)}
          />
        </div>
        <Spinner />;
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
          onClose={onToggleModalState}
          isOpen={isOpenModalStateFreeTime}
        />
      )}

      <div className={styles.container}>
        <ButtonBack
          text={'Вернуться назад'}
          onClick={() => navigate(`/tutor-catalog`)}
        />

        <main className={styles.container__profile}>
          <div className={styles.container__profile_contact}>
            <img
              className={styles.container__profile_contact_img}
              src={dataState.image}
              alt="Фото репетитора"
            />
            <div className={styles.container__profile_contact_connection}>
              {role === 'student' || role === 'tutor' ? (
                <Button text="Связаться" variant="purple" />
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
                <span className={styles.container__info_portrait_status_years}>
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
                {dataState.price}
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
              className={styles.container__profile_info_freeTime}
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
