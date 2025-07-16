import { useState } from 'react';

import { useAppContext } from '../../app/AppContext';
import TutorFilters from '../../features/TutorFilters/ui';
import useClickOutside from '../../shared/hooks/useClickOutside';
import useScrollLock from '../../shared/hooks/useScrollLock';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import { Modal } from '../../shared/ui/modal';
import { TelegramBlock } from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import useUsersData from '../../widgets/UserCard/fakeApi/useUserData';

import styles from './index.module.scss';

const TutorCatalogPage = () => {
  /* Для вызова компонента, необходимо вызвать хук для отображения 
  моковых данных через промисы апи. В дальнейшем, для работы с карточками, нужно вызвать 
  в компонентах, где нужны карточки пользователей, и передавать им через пропсы данные и 
  роль пользователя. Из app убрать текущий тестовый стенд */

  const { role } = useAppContext();

  const {
    data: tutors,
    loading: loadingTutors,
    error: errorTutors
  } = useUsersData<ITutorData>('tutors');

  const [visibleCount, setVisibleCount] = useState(5);
  const [tooltipFilter, setTooltipFilter] = useState(false);
  const [tooltipNotFound, setTooltipNotFound] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const tooltipRef = useClickOutside(() => setTooltipFilter(false));

  useScrollLock(modalOpen);

  const handleSubmitFilter = () => {
    setModalOpen(true);
    setTooltipNotFound(true);
  };

  return (
    <>
      <main className={styles.catalog} id="catalog">
        <h2 className={styles.catalog__title}>Репетиторы</h2>
        <div className={styles.catalog__cards}>
          {loadingTutors ? (
            <div className={styles.loader} />
          ) : errorTutors ? (
            <div>{errorTutors}</div>
          ) : (
            <>
              {tooltipFilter && (
                <h3 className={styles.catalog__hint}>
                  Чтобы найти специалиста, выберите параметры фильтров
                </h3>
              )}
              {tooltipNotFound && (
                <h3 className={styles['catalog__hint_search']}>
                  По вашему запросу репетиторы не найдены, но вот те, которые
                  могут вам подойти
                </h3>
              )}
              {tutors.slice(0, visibleCount).map((tutor, index) => (
                <UserCard key={index} role={role} tutorData={tutor} />
              ))}

              {tutors.length > visibleCount && (
                <Button
                  text="Показать еще"
                  variant="transparent"
                  size="large"
                  className={styles.catalog__button}
                  onClick={() => setVisibleCount((prevCount) => prevCount + 5)}
                />
              )}
            </>
          )}
        </div>
        <div className={styles.catalog__filters} ref={tooltipRef}>
          <TutorFilters
            onSubmit={handleSubmitFilter} // Возвращает массив объектов
            onReset={() => setTooltipNotFound(false)}
            percentage={1}
            onToggleTooltip={() => setTooltipFilter((prev) => !prev)}
          />
        </div>
        <div className={styles.catalog__link}>
          <TelegramBlock />
        </div>
      </main>

      {modalOpen && (
        <Modal haveCloseIcon={true} onClose={() => setModalOpen(false)}>
          <div className={styles.modal__accept}>
            <div className={styles.modal__accept_context}>
              <h3 className={styles['modal__accept_context--title']}>
                По вашему запросу репетиторы не найдены
              </h3>
              <p className={styles['modal__accept_context--text']}>
                Вы можете оставить заявку, и мы поищем репетитора под ваш запрос
                в нашей дополнительной базе. Отправить заявку?
              </p>
            </div>
            <div className={styles.modal__accept_buttons}>
              <Button
                text="нет"
                variant="white"
                size="large"
                onClick={() => setModalOpen(false)}
                className={styles['modal__accept_buttons--item']}
              />
              <Button
                text="да"
                variant="white"
                size="large"
                onClick={() => setModalOpen(false)}
                className={styles['modal__accept_buttons--item']}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TutorCatalogPage;
