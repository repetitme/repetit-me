import { IStudentData } from '../../../shared/types/userData';
import UserInfo from '../../../shared/ui/userInfo';
import { getTimeAgoText } from '../../../shared/utils/CorrectDeclination';

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
            <p className={styles.profile__parameters_activity}>
              {getTimeAgoText(activityStatus)}
            </p>
          )}

          {importantInfo && (
            <p className={styles.profile__parameters_important}>
              {`Задолженность по комиссии: ${importantInfo} ₽`}
            </p>
          )}
          <p className={styles.profile__parameters_price}>
            от {price} руб./час
          </p>
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
