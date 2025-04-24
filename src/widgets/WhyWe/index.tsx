import ListItem from '../../shared/components/ListItem';
import { listItems } from './data';
import styles from './index.module.scss';

export const WhyWe: React.FC = () => (
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
