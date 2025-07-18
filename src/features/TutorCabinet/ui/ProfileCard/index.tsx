import TutorRating from '../../../../shared/ui/tutorRating';
import { ProfileCardProps } from './data';

import styles from './index.module.scss';

const ProfileCard = ({
  name,
  status,
  tg,
  link,
  rating,
  avatar
}: ProfileCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {avatar ? (
          <img
            src={avatar}
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
            href={link}
            className={styles.refBlock__link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
