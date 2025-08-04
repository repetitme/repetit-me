import ListItem from '../../shared/ui/listItem';
import { listItems } from './data';

import styles from './index.module.scss';

const WhyWe = () => (
  <section className={styles.container}>
    <h2 className={styles.title}>
      Почему <span className={styles.accent}>мы</span>?
    </h2>
    <ul className={styles.list}>
      {listItems.map((item) => (
        <ListItem key={item.number} {...item} />
      ))}
    </ul>
  </section>
);
export default WhyWe;
