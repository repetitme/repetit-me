import styles from './index.module.scss';

import { TParametrItem } from './type';

const ParametrItem: React.FC<TParametrItem> = ({ src, items }) => {
  return (
    <div className={styles.user__parameters}>
      <img
        src={src}
        alt="Иконка списка"
        className={styles['user__parameters_icon']}
      />
      <ul className={styles['user__parameters_list']}>
        {items.map((item, index) => (
          <li key={index} className={styles['user__parameters_item']}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParametrItem;
