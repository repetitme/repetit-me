import styles from './index.module.scss';
import { IUserInfo } from './type';
import ParametrItem from '../ParametrItem';

import disciplineIcon from '../../../assets/images/UserCardIcons/disciplines_icon.svg';
import studentCategory from '../../../assets/images/UserCardIcons/student_category_icon.svg';
import tutorTask from '../../../assets/images/UserCardIcons/tutors_task_icon.svg';

const UserInfo: React.FC<IUserInfo> = ({ data, children }) => {
  const nameParts = data.name.split(' ');
  const lastName = nameParts[0];
  const firstName = nameParts.slice(1).join(' ');

  return (
    <div className={styles.user}>
      <h3 className={styles.user__name}>
        {lastName} <br />
        {firstName}
      </h3>
      <>{children}</>
      <ParametrItem src={disciplineIcon} items={data.subjects} />
      <ParametrItem src={studentCategory} items={data.studentAudience} />
      <ParametrItem src={tutorTask} items={data.purpose} />
    </div>
  );
};

export default UserInfo;
