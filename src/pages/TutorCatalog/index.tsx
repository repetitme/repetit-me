import { useState } from 'react';

import { TutorFilters } from '../../features/TutorFilters';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import { TelegramBlock } from '../../shared/ui/telegramBlock';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import UserCard from '../../widgets/UserCard';
import useUsersData from '../../widgets/UserCard/fakeApi/useUserData';

import styles from './index.module.scss';

const TutorCatalog = () => {
  /* Для вызова компонента, необходимо вызвать хук для отображения 
  моковых данных через промисы апи. В дальнейшем, для работы с карточками, нужно вызвать 
  в компонентах, где нужны карточки пользователей, и передавать им через пропсы данные и 
  роль пользователя. Из app убрать текущий тестовый стенд */

  const {
    data: tutors,
    loading: loadingTutors,
    error: errorTutors
  } = useUsersData<ITutorData>('tutors');

  const [visibleCount, setVisibleCount] = useState(5);
  const percentageValue = 1;

  if (loadingTutors) {
    return <div>Loading...</div>;
  }

  if (errorTutors) {
    return <div>{errorTutors}</div>;
  }

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Увеличиваем количество видимых репетиторов на 5
  };

  const displayedTutors = tutors.slice(0, visibleCount);

  return (
    <>
      <Header auth="unauth" />
      <main className={styles.catalog}>
        <div className={styles.catalog__cards}>
          {percentageValue <= 1 && (
            <h3 className={styles.catalog__search_hint}>
              Чтобы найти специалиста, заполните детали заказа
            </h3>
          )}
          {displayedTutors.map((tutor) => (
            <UserCard key={tutor.id} role="unAuthorized" tutorData={tutor} />
          ))}
          {tutors.length > visibleCount && (
            <Button
              text="Показать еще"
              variant="transparent"
              size="large"
              className={styles.catalog__button}
              onClick={handleShowMore}
            />
          )}
        </div>
        <div className={styles.catalog__filters}>
          <TutorFilters
            onSubmit={(values) => console.log(values)}
            percentage={percentageValue}
          />
        </div>
        <div className={styles.catalog__link}>
          <TelegramBlock />
        </div>
      </main>
      <Footer role="unauthorized" goTelegram={true} />
    </>
  );
};

export default TutorCatalog;
