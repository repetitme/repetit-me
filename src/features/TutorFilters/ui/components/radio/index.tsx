import styles from './index.module.scss';

import { TRadio } from './types';

export const Radio = ({
  title,
  items,
  values,
  handleChange
}: TRadio): React.JSX.Element => {
  return (
    <div className={styles.radio}>
      <h3 className={styles.radio__title}>{title}</h3>
      <ul className={styles.radio__list}>
        {items.map((item) => (
          <li key={item} className={styles.radio__checkbox}>
            <input
              type="radio"
              name={title}
              value={item}
              onChange={handleChange}
              checked={values[title]?.[0] === item}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
