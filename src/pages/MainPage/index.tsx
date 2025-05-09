import { useState } from 'react';

import classNames from 'classnames';

import AuthForm from '../../features/auth/form';
import Advantages from '../../widgets/Advantages';
import Chat from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
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
    <>
      <Header auth={'student'} />
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
      <Footer role="student" />
    </>
  );
};
export default MainPage;
