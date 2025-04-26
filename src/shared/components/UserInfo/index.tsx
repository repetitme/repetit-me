import disciplineIcon from '../../../assets/images/UserCardIcons/disciplines_icon.svg';
import studentCategory from '../../../assets/images/UserCardIcons/student_category_icon.svg';
import tutorTask from '../../../assets/images/UserCardIcons/tutors_task_icon.svg';
import useWindowSize from '../../hooks/useWindowSize';
import ParametrItem from '../ParametrItem';

import styles from './index.module.scss';

import { IUserInfo } from './type';

const UserInfo: React.FC<IUserInfo> = ({ data, children }) => {
  const { width } = useWindowSize();
  const nameParts = data.name.split(' '); // Поменять расположение пременных в h3, в зависимости от формата получения ФИО пользователя
  const lastName = width < 621 ? nameParts[nameParts.length - 1] : '';
  const firstName = width < 621 ? nameParts.slice(0, -2).join(' ') : data.name;

  return (
    <div className={styles.user}>
      <h3 className={styles.user__name}>
        {firstName} {lastName}
      </h3>
      <>{children}</>
      <ParametrItem src={disciplineIcon} items={data.subjects} />
      <ParametrItem src={studentCategory} items={data.studentAudience} />
      <ParametrItem src={tutorTask} items={data.purpose} />
    </div>
  );
};

export default UserInfo;
