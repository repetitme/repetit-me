import styles from '../index.module.scss';

import { TCheckbox } from '../types';

const Checkbox = ({
  title,
  items,
  index,
  values,
  handleChange
}: TCheckbox): React.JSX.Element => {
  return (
    <div className={styles.checkboxes}>
      {!Number.isFinite(index) && (
        <h4 className={styles.checkboxes__title}>{title}</h4>
      )}
      <ul className={styles.checkboxes__list}>
        {items!.map((item) => (
          <li key={item} className={styles.checkboxes__checkbox}>
            <input
              type="checkbox"
              name={title}
              value={item}
              onChange={handleChange}
              checked={!!values?.includes(item)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkbox;
