import { useState } from 'react';

import { TutorCabinetCardProps } from '../../../../shared/types/userData';
import TutorRating from '../../../../shared/ui/tutorRating';
import FeedbacksModal from '../../../../widgets/FeedbacksModal';

import styles from './index.module.scss';

const ProfileCard = ({
  name,
  status,
  tg,
  linkRef,
  rating,
  image
}: TutorCabinetCardProps) => {
  const [isFeedbacksModalOpen, setIsFeedbacksModalOpen] = useState(false);

  const handleClose = () => {
    setIsFeedbacksModalOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {image ? (
          <img
            src={image}
            alt={`Аватар ${name}`}
            className={styles.img}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className={styles.img__noPhoto}>Нет фото</div>
        )}
        <TutorRating
          variant="onProfile"
          rating={rating}
          setOpenModalState={setIsFeedbacksModalOpen}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.status}>{status}</p>
        <p className={styles.title}>
          Ник в телеграме:
          <span className={styles['title--tg']}> {tg}</span>
        </p>
        <div className={styles.refBlock}>
          <p className={styles.refBlock__title}>Реферальная ссылка:</p>
          <a
            href={linkRef}
            className={styles.refBlock__link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkRef}
          </a>
        </div>
      </div>
      {isFeedbacksModalOpen && (
        <FeedbacksModal
          isOpen={isFeedbacksModalOpen}
          onClose={handleClose}
          rating={rating}
        />
      )}
    </div>
  );
};

export default ProfileCard;
