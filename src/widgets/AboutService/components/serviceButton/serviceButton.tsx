import styles from './index.module.scss';

import { IServiceButtons } from './type';

export const ServiceButton: React.FC<IServiceButtons> = ({
  title,
  icon,
  onModal,
  url
}) => {
  return url ? (
    <a className={styles.button} href={url}>
      <p className={styles.button__title}>{title}</p>
      <img src={icon} alt={`${title} icon`} className={styles.button__icon} />
    </a>
  ) : (
    <button className={styles.button} onClick={onModal}>
      <p className={styles.button__title}>{title}</p>
      <img src={icon} alt={`${title} icon`} className={styles.button__icon} />
    </button>
  );
};
