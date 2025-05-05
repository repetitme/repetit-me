import classNames from 'classnames';

import UserInfo from '../../../shared/components/UserInfo';
import { ITutorData } from '../../../shared/types/userData';
import TutorRating from '../../../shared/ui/tutorRating';

import styles from '../index.module.scss';

const TutorProfile: React.FC<ITutorData> = ({
  name = '',
  subjects = [],
  studentAudience = [],
  purpose = [],
  image,
  link = '',
  rating = 0,
  description,
  status,
  experienceYears,
  price,
  isCard
}) => {
  return (
    <>
      <div className={styles.profile__avatar}>
        <img
          className={styles['profile__avatar--image']}
          src={image}
          alt="Фотография репетитора"
        />
        {link && (
          <a
            className={classNames(
              !isCard && styles['profile__avatar--link'],
              isCard && styles['profile__avatar--link_tablet']
            )}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </div>
      <div className={styles.profile__rating}>
        <TutorRating variant="small" rating={rating} />
      </div>
      <UserInfo data={{ name, subjects, studentAudience, purpose }}>
        <div className={styles.profile__parameters}>
          <div className={styles.profile__parameters_speciality}>
            <p className={styles['profile__parameters_speciality--status']}>
              {status}
            </p>
            <p className={styles['profile__parameters_speciality--experience']}>
              {`Стаж ${experienceYears} лет`}
            </p>
          </div>
          <p className={styles.profile__parameters_description}>
            <span className={styles['profile__parameters_description--accent']}>
              О себе:{' '}
            </span>
            {description}
          </p>
          <p className={styles.profile__parameters_price}>{price}</p>
        </div>
      </UserInfo>
    </>
  );
};

export default TutorProfile;
