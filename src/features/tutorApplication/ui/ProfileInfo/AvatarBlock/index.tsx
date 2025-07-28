import tutorIcon from '../../../../../assets/icons/tutorIcon.svg';

import styles from './index.module.scss';

import AvatarWrapperProps from './type';

const AvatarBlock = ({
  avatarUrl,
  size = 258,
  iconWidth = 157,
  iconHeight = 165
}: AvatarWrapperProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        src={tutorIcon}
        className={styles.icon}
        style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }}
        alt="Иконка аватара"
      />
      {avatarUrl && (
        <img
          src={avatarUrl}
          className={styles.avatar}
          alt="Аватар преподавателя"
        />
      )}
    </div>
  );
};

export default AvatarBlock;
