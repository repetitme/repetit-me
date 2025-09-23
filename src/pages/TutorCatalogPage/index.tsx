import { useState } from 'react';

import { useAppContext } from '../../app/AppContext';
import TutorFilters from '../../features/TutorFilters/ui';
import useClickOutside from '../../shared/hooks/useClickOutside';
import useScrollLock from '../../shared/hooks/useScrollLock';
import { ITutorData } from '../../shared/types/userData';
import Button from '../../shared/ui/button';
import ModalPortal from '../../shared/ui/modal';
import TelegramBlock from '../../shared/ui/telegramBlock';
import UserCard from '../../widgets/UserCard';
import useUsersData from '../../widgets/UserCard/fakeApi/useUserData';
import ModalContent from './components/ModalContent';

import styles from './index.module.scss';

const TutorCatalogPage = () => {
  const { role } = useAppContext();

  const {
    data: tutors,
    loading: loadingTutors,
    error: errorTutors
  } = useUsersData<ITutorData>('tutors');

  const [visibleCount, setVisibleCount] = useState(5);
  const [tooltipFilter, setTooltipFilter] = useState(true);
  const [tooltipNotFound, setTooltipNotFound] = useState(false);
  const [modalOpen, setModalOpen] = useState<'submit' | 'filter' | null>(null);

  useScrollLock(modalOpen !== null);

  const handleOpenModal = (option: 'submit' | 'filter') => {
    setModalOpen(option);
    if (option !== 'submit') {
      setTooltipNotFound(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(null);
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
              {tutors.slice(0, visibleCount).map((tutor) => (
                <UserCard key={tutor.id} role={role} tutorData={tutor} />
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
        <div className={styles.catalog__filters}>
          <TutorFilters
            onSubmit={() => handleOpenModal('filter')}
            onReset={() => setTooltipNotFound(false)}
            percentage={1}
            onToggleTooltip={() => setTooltipFilter((prev) => !prev)}
          />
        </div>
        <div className={styles.catalog__link}>
          <TelegramBlock />
        </div>
      </main>

      {modalOpen !== null && (
        <ModalPortal
          isOpen={modalOpen !== null}
          haveCloseIcon={true}
          onClose={handleCloseModal}
        >
          <ModalContent type={modalOpen} onClose={handleCloseModal} />
        </ModalPortal>
      )}
    </>
  );
};

export default TutorCatalogPage;
