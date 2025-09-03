import bachelorCap from '../../../../assets/icons/bachelor-cap.svg';
import bookshelf from '../../../../assets/icons/bookshelf.svg';
import peoples from '../../../../assets/icons/peoples.svg';

import styles from './index.module.scss';

import { IAboutProfile } from './type';

const AboutProfile = ({
  name,
  lessonsCompleted,
  importantInfo,
  price,
  additionalInfo,
  workingStatus,
  subjects,
  studentAudience,
  purpose
}: IAboutProfile) => {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__textContainer}>
        <div className={styles.profile__textContainer_accent}>
          <p className={styles.profile__studentName}>{name}</p>
          <p className={styles.profile__lessonsAmount}>
            Пройдено занятий: {lessonsCompleted ? lessonsCompleted : 0}
          </p>
          {importantInfo ? (
            <p className={styles.profile__debt}>
              Задолженность по комиссии: {importantInfo} руб.
            </p>
          ) : (
            <></>
          )}
        </div>
        <p className={styles.profile__price}>{price} руб./час</p>
        <p className={styles.profile__addInfo}>
          Доп. информация:{' '}
          <span className={styles.profile__addInfo_secondary}>
            {additionalInfo}
          </span>
        </p>
      </div>
      {workingStatus === 'Занятия начались' ? (
        <div
          className={`${styles.profile__lessonTag} ${styles.profile__lessonTag_inactive}`}
        >
          Занятия не начались
        </div>
      ) : (
        <div
          className={`${styles.profile__lessonTag} ${styles.profile__lessonTag_active}`}
        >
          Занятия начались
        </div>
      )}
      <div className={styles.profile__tagContainer}>
        <div className={styles.profile__listContainer}>
          <img src={bookshelf}></img>
          <ul className={styles.profile__tagList}>
            {subjects.map((subject, index) => (
              <li key={index} className={styles.profile__tag}>
                {subject}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.profile__listContainer}>
          <img src={peoples}></img>
          <ul className={styles.profile__tagList}>
            {studentAudience.map((grade, index) => (
              <li key={index} className={styles.profile__tag}>
                {grade}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.profile__listContainer}>
          <img src={bachelorCap}></img>
          <ul className={styles.profile__tagList}>
            {purpose.map((prep, index) => (
              <li key={index} className={styles.profile__tag}>
                {prep}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
