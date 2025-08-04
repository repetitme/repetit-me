import { useEffect, useState } from 'react';

import classNames from 'classnames';

import AuthForm from '../../features/auth';
import { TUserRole } from '../../shared/types/userData';
import Advantages from '../../widgets/Advantages';
import Chat from '../../widgets/Chat';
import MainBlock from '../../widgets/MainBlock';
import Perks from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import QuickSelection from '../../widgets/QuickSelection';
import Recruiting from '../../widgets/Recruiting';
import TutorFormBlock from '../../widgets/TutorFormBlock';
import WhyWe from '../../widgets/WhyWe';

import styles from './index.module.scss';

const MainPage = () => {
  const [userRole, setUserRole] = useState<TUserRole>(() => {
    const saved = localStorage.getItem('userType') as TUserRole | null;
    return saved || 'student';
  });
  const isTutor = userRole === 'tutor';

  useEffect(() => {
    localStorage.setItem('userType', userRole);
  }, [userRole]);
  return (
    <>
      <main className={styles.container}>
        <div className={styles.container__mainblock}>
          <MainBlock
            isActive={isTutor}
            setIsActive={(isActive) =>
              setUserRole(isActive ? 'tutor' : 'student')
            }
          />
        </div>
        {!isTutor && (
          <>
            <div className={styles.container__perks}>
              <Perks variant="student" />
            </div>
            <div className={styles.container__chat}>
              <Chat />
            </div>
            <div className={styles.container__advantages}>
              <Advantages />
            </div>
            <div className={styles.container__quickselection}>
              <QuickSelection />
            </div>
            <div
              className={classNames(
                styles['container__question'],
                styles['container__question-student']
              )}
            >
              <QuestionList />
            </div>
          </>
        )}
        {isTutor && (
          <>
            <div className={styles.container__perks}>
              <Perks variant="teacher" />
            </div>
            <div className={styles.container__whywe}>
              <WhyWe />
            </div>
            <div className={styles.container__recruiting}>
              <Recruiting />
            </div>
            <div className={styles.container__form}>
              <TutorFormBlock>
                <AuthForm mainPageRegister={true} login={false} />
              </TutorFormBlock>
            </div>
            <div
              className={classNames(
                styles['container__question'],
                styles['container__question-teacher']
              )}
            >
              <QuestionList />
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default MainPage;
