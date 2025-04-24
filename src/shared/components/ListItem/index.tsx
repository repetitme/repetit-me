import classNames from 'classnames';

import { ListItemProps } from './type';
import styles from './index.module.scss';

export const ListItem: React.FC<ListItemProps> = ({
  number,
  title,
  text,
  image,
  alt,
  className
}) => {
  return (
    <li className={classNames(styles.list__item, className)}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>
        <h3 className={styles.content__title}>{title}</h3>
        <div className={styles.content__txt}>{text}</div>
      </div>
      <img src={image} alt={alt} />
    </li>
  );
};
export default ListItem;
