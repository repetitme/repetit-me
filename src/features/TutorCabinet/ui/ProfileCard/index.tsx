import { Link } from 'react-router'
import TutorRating from '../../../../shared/ui/tutorRating';
import { ProfileCardProps } from './data';

import styles from './index.module.scss';

const ProfileCard = ({ name, status, tg, link, rating }: ProfileCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img className={styles.img} />
        <TutorRating variant="large" rating={rating} />
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.status}>{status}</p>
        <p className={styles.title}>Ник в телеграме:
          <span className={styles['title--tg']}>{tg}</span>
        </p>
        <p className={styles.title}>Реферальная ссылка:
          <Link to='/' className={styles['title--link']}/>
          {link}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
