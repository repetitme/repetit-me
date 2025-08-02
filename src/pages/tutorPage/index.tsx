import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import arrow from '../../assets/icons/arrow.svg';
import disciplineIcon from '../../assets/images/UserCardIcons/disciplines_icon.svg';
import studentCategory from '../../assets/images/UserCardIcons/student_category_icon.svg';
import tutorTask from '../../assets/images/UserCardIcons/tutors_task_icon.svg';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import ParametrItem from '../../shared/ui/parameterItem';
import TutorRating from '../../shared/ui/tutorRating';
import AboutMe from '../../widgets/AboutMe';
import FeedbacksModal from '../../widgets/FeedbacksModal';
import FreeTimeTable from '../../widgets/FreeTimeTable';
import TutorDiploma from '../../widgets/TutorDocuments';
import TutorVideoStart from '../../widgets/TutorVideoStart';
import * as API from '../../widgets/UserCard/fakeApi/userApi';

import styles from './index.module.scss';
import ButtonBack from '../../shared/ui/buttonBack';

type RouteParams = {
  id: string;
};

const TutorPage = () => {
const navigate = useNavigate();
    window.scrollTo(0, 0);

  const [isOpenModalState, setOpenModalState] = useState(false);
  const [dataState, setDataState] = useState<ITutorData>();
  const params = useParams<RouteParams>();

  const onToggleModalState = () => {
    setOpenModalState(!isOpenModalState);
  };

  const { role } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return;
      try {
        const tutorInfo = await API.getTutor(params.id);
        setDataState(tutorInfo);
      } catch (error) {
        console.error(`Ошибка при загрузке данных:`, error);
      } finally {
        console.log(`Загрузка`);
      }
    };
    fetchData();
  }, [params.id, location.key]);

  if (!dataState) return null;
  return (
    <>
      {isOpenModalState && (
        <FeedbacksModal
          onClose={onToggleModalState}
          rating={dataState?.rating ?? 0}
          isOpen = {isOpenModalState}
        />
      )}
      <div className={styles.container}>
        <ButtonBack text={'Вернуться назад'} onClick={() => navigate(`/tutor-catalog`)} />

        <main className={styles.container__profile}>
          <div className={styles.container__profile_contact}>
            <img
              className={styles.container__profile_contact_img}
              src={dataState && dataState.image}
              alt="Фото репетитора"
            />
            <div className={styles.container__profile_contact_connection}>
              {role === 'student' || role === 'teacher' ? (
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
                {dataState && dataState.name}
              </h2>
              <p className={styles.container__profile_info_portrait_status}>
                {dataState && dataState.status}&nbsp;
                <span className={styles.container__info_portrait_status_years}>
                  Стаж {dataState && dataState.experienceYears} лет
                </span>
              </p>
              <div className={styles.container__profile_info_portrait_raiting}>
                {role === 'student' || role === 'teacher' ? (
                <TutorRating
                  variant="large"
                  rating={dataState?.rating ?? 0}
                  setOpenModalState={setOpenModalState}
                  disabled = {false}
                  
                />
                ) : (
                role === 'unauth' && <TutorRating
                  variant="large"
                  rating={dataState?.rating ?? 0}
                  setOpenModalState={setOpenModalState}
                  disabled = {true}
                />)}
              </div>
              <p className={styles.container__profile_info_portrait_price}>
                {dataState && dataState.price}
              </p>
              <div
                className={styles.container__profile_info_portrait_parametrs}
              >
                <ParametrItem
                  src={disciplineIcon}
                  items={dataState?.subjects}
                />
                <ParametrItem
                  src={studentCategory}
                  items={dataState?.studentAudience}
                />
                <ParametrItem
                  src={tutorTask}
                  items={dataState.purpose}
                />
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
            {dataState.documents[0] && (<TutorDiploma documents={dataState.documents} /> )}            
            {dataState.videoStart && (<TutorVideoStart video={dataState.videoStart} />)}
            <FreeTimeTable freeTime={dataState.freeTime} />
          </div>
        </main>
      </div>
    </>
  );
};
export default TutorPage;
