import { useEffect, useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import AboutProfile from '../../features/TutorCabinet/ui/AboutProfile';
import { IStudentData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import ButtonBack from '../../shared/ui/buttonBack';
import Loader from '../../shared/ui/loader';
import PreviousLessons from '../../widgets/PreviousLessons';
import {
  lessonsListPaidData,
  lessonsListUnpaidData
} from '../../widgets/PreviousLessons/data';
import * as API from '../../widgets/UserCard/fakeApi/userApi';

import styles from './index.module.scss';

type RouteParams = {
  id: string;
};

const TutorStudentPage = () => {
  const navigate = useNavigate();

  const [dataState, setDataState] = useState<IStudentData>();
  const params = useParams<RouteParams>();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (!params.id) return;
      const studentInfo = await API.getStudent(params.id);
      setDataState(studentInfo);
    };
    fetchData();
  }, [params.id, location.key]);
  if (!dataState)
    return (
      <>
        <div className={styles.back}>
          <ButtonBack
            text={'Вернуться назад'}
            onClick={() => navigate(`/requests`)}
          />
        </div>
        <Loader />;
      </>
    );

  return (
    <main className={styles.page}>
      <ButtonBack
        className={styles.page__returnButton}
        text="Вернуться назад"
        onClick={() => navigate(`/requests`)}
      />
      <div className={styles.page__content}>
        <div className={styles.page__content_profile}>
          <img
            className={styles.page__content_profile_image}
            src={dataState.image}
          ></img>
          <Button text="Оплатить комиссию" variant="purple"></Button>
        </div>
        <div className={styles.page__content_info}>
          <AboutProfile
            name={dataState.name}
            lessonsCompleted={dataState.lessonsCompleted}
            price={dataState.price}
            additionalInfo={dataState.additionalInfo}
            subjects={dataState.subjects}
            studentAudience={dataState.studentAudience}
            purpose={dataState.purpose}
          ></AboutProfile>
          <PreviousLessons
            lessonsListPaid={lessonsListPaidData}
            lessonsListUnpaid={lessonsListUnpaidData}
          ></PreviousLessons>
        </div>
      </div>
    </main>
  );
};

export default TutorStudentPage;
