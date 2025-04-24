import classNames from 'classnames';

import styles from './index.module.scss';
import { TInfoBlockProps } from './type';

export const InfoBlock: React.FC<TInfoBlockProps> = ({
  title,
  text,
  className
}) => {
  return (
    <div className={classNames(styles.block, className)}>
      <h3 className={styles.block__title}>{title}</h3>
      <p className={styles.block__txt}>{text}</p>
    </div>
  );
};
export default InfoBlock;
