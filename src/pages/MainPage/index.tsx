import { useState } from 'react';

import classNames from 'classnames';

import AuthForm from '../../features/Auth';
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
  const [isActive, setIsActive] = useState(false);
  return (
    <main className={styles.container}>
      <div className={styles.container__mainblock}>
        <MainBlock isActive={isActive} setIsActive={setIsActive} />
      </div>
      {!isActive && (
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
      {isActive && (
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
              <AuthForm mainPageRegister />
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
  );
};
export default MainPage;
