import cn from 'classnames';

import styles from './index.module.scss';

import { TCheckbox } from './types';

export const Checkbox = ({
  title,
  items,
  index,
  values,
  isInAccordion,
  handleChange
}: TCheckbox): React.JSX.Element => {
  return (
    <div className={styles.checkboxes}>
      {!Number.isFinite(index) && (
        <h4 className={styles.checkboxes__title}>{title}</h4>
      )}
      <ul
        className={cn(styles.checkboxes__list, {
          [styles['checkboxes__list--accordion']]: isInAccordion
        })}
      >
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
