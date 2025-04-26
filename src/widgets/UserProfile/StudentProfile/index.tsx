import TimeAgo from '../../../shared/components/TimeAgo';
import UserInfo from '../../../shared/components/UserInfo';
import { IStudentData } from '../../../shared/types/userData';

import styles from '../index.module.scss';

interface IStudentDataProps extends IStudentData {
  handleSubmit: boolean;
}

const StudentProfile: React.FC<IStudentDataProps> = ({
  handleSubmit,
  name = '',
  subjects = [],
  studentAudience = [],
  purpose = [],
  image,
  lessonsCompleted,
  activityStatus,
  importantInfo,
  price,
  additionalInfo,
  workingStatus
}) => {
  return (
    <>
      <div className={styles.profile__avatar}>
        <img
          className={styles['profile__avatar--image']}
          src={image}
          alt="Фотография ученика"
        />
      </div>
      <UserInfo data={{ name, subjects, studentAudience, purpose }}>
        <div className={styles.profile__parameters}>
          {lessonsCompleted ? (
            <p className={styles.profile__parameters_activity}>
              {`Пройдено занятий: ${lessonsCompleted}`}
            </p>
          ) : (
            <TimeAgo
              hours={activityStatus}
              className={styles.profile__parameters_activity}
            />
          )}

          {importantInfo && (
            <p className={styles.profile__parameters_important}>
              {`Задолженность по комиссии: ${importantInfo} ₽`}
            </p>
          )}
          <p className={styles.profile__parameters_price}>{price}</p>
          <p className={styles.profile__parameters_description}>
            <span className={styles['profile__parameters_description--accent']}>
              Доп. информация:{' '}
            </span>
            {additionalInfo}
          </p>
          {!handleSubmit && workingStatus && (
            <p
              className={styles.profile__parameters_working}
              style={
                workingStatus === 'Занятия не начались'
                  ? { color: '#C91B1A', backgroundColor: '#FEEDEB' }
                  : { color: '#008052', backgroundColor: '#e7f6f1' }
              }
            >
              {workingStatus}
            </p>
          )}
        </div>
      </UserInfo>
    </>
  );
};

export default StudentProfile;
