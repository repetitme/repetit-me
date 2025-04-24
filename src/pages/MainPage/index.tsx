import { useState } from 'react';
import classNames from 'classnames';

import QuickSelection from '../../widgets/QuickSelection';
import MainBlock from '../../widgets/MainBlock';
import WhyWe from '../../widgets/WhyWe';
import Chat from '../../widgets/Chat';
import Perks from '../../widgets/Perks';
import Advantages from '../../widgets/Advantages';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';
import Recruiting from '../../widgets/Recruiting';

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
            <TutorFormBlock />
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
