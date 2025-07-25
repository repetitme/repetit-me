import { useState } from 'react';

import TutorFilters from '../../features/TutorFilters/ui';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import useUsersData from '../../widgets/UserCard/fakeApi/useUserData';

import styles from './index.module.scss';

const TutorCatalogPage = () => {
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
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useClickOutside(() => setTooltipVisible(false));

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <>
      <main className={styles.catalog}>
        <div className={styles.catalog__cards}>
          {loadingTutors ? (
            <div className={styles.loader} />
          ) : errorTutors ? (
            <div>{errorTutors}</div>
          ) : (
            <>
              {tooltipVisible && (
                <h3 className={styles.catalog__search_hint}>
                  Чтобы найти специалиста, заполните детали заказа
                </h3>
              )}

              {tutors.slice(0, visibleCount).map((tutor, index) => (
                <UserCard key={index} role={'student'} tutorData={tutor} />
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
            </>
          )}
        </div>
        <div className={styles.catalog__filters} ref={tooltipRef}>
          <TutorFilters
            onSubmit={() => {}} // Возвращает массив объектов
            percentage={1}
            onToggleTooltip={() => setTooltipVisible((prev) => !prev)}
          />
        </div>
        <div className={styles.catalog__link}>
          <TelegramBlock />
        </div>
      </main>
    </>
  );
};

export default TutorCatalogPage;
