import styles from './index.module.scss';

import { IServicesList } from './type';

export const ServicesList: React.FC<IServicesList> = ({ services }) => {
  return (
    <ul className={styles.container__content_list}>
      {services.map((item, index) => (
        <li key={index} className={styles.container__content_list_item}>
          <span>{item.service}</span> <span>{item.price} руб./час</span>
        </li>
      ))}
    </ul>
  );
};
