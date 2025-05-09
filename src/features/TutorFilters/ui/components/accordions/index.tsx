import cn from 'classnames';

import styles from './index.module.scss';

import { TAccordions } from './types';

const Accordions = ({
  data,
  isOpen,
  values,
  Checkbox,
  toggleAccordion,
  handleChange
}: TAccordions): React.JSX.Element => {
  return (
    <div className={styles.accordions}>
      <h3 className={styles['main-title']}>Предметы</h3>
      {data.map(({ title, items }, index) => {
        return (
          <div
            key={index}
            className={cn(styles.item, {
              [styles.item_open]: isOpen[index],
              [styles.item_open_subjects]: isOpen[index] && index === 0,
              [styles.item_open_languages]: isOpen[index] && index === 1,
              [styles.item_open_speech]: isOpen[index] && index === 2,
              [styles.item_open_other]: isOpen[index] && index === 3
            })}
          >
            <button
              type="button"
              className={styles.button}
              onClick={() => toggleAccordion(index)}
            >
              <h3 className={styles.title}>{title}</h3>
              <span className={styles.chevron} />
            </button>
            <div className={styles.content}>
              {Checkbox({
                title,
                items,
                index,
                isInAccordion: true,
                values: values[title],
                handleChange
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordions;
