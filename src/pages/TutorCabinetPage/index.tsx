import { useState } from 'react';

import AboutService from '../../features/TutorCabinet/ui/AboutService';
import {
  bonusPopupData,
  reviewPopupData
} from '../../features/TutorCabinet/ui/AboutService/data';
import ApplicationProgress from '../../features/TutorCabinet/ui/ApplicationProgress';
import ProfileCard from '../../features/TutorCabinet/ui/ProfileCard';
import { profileCardData } from '../../features/TutorCabinet/ui/ProfileCard/mockData';
import ScheduleProfile from '../../features/TutorCabinet/ui/ScheduleProfile';
import {
  firstLessonsData,
  scheduleLessonsData
} from '../../features/TutorCabinet/ui/ScheduleProfile/data';
import StatisticCards from '../../features/TutorCabinet/ui/StatisticCards';

import styles from './index.module.scss';

const TutorCabinetPage = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleProfileVisible = (value: boolean) => {
    setIsProfileVisible(value);
    // Здесь добавить вызов API для сохранения состояния на сервере
  };

  return (
    <main className={styles.cabinet}>
      <h2 className={styles.cabinet__title}>Личный кабинет</h2>
      <AboutService bonusPopup={bonusPopupData} reviewPopup={reviewPopupData} />
      <div className={styles.cabinet__infoBlock}>
        <ProfileCard
          name={profileCardData.name}
          status={profileCardData.status}
          tg={profileCardData.tg}
          rating={profileCardData.rating}
          image={profileCardData.image}
          link={profileCardData.link}
        />
        <ApplicationProgress
          isProfileHidden={isProfileVisible}
          onToggleVisibility={handleProfileVisible}
          progress={90}
        />
      </div>
      <StatisticCards />
      <ScheduleProfile
        firstLessons={firstLessonsData}
        scheduleLessons={scheduleLessonsData}
      />
    </main>
  );
};

export default TutorCabinetPage;
