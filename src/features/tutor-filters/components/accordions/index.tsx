import cn from 'classnames';

import styles from './index.module.scss';

import { TAccordions } from './types';

const Accordions = ({
  data,
  isOpen,
  titles,
  values,
  Checkbox,
  toggleAccordion,
  handleChange
}: TAccordions): React.JSX.Element => {
  return (
    <div className={styles.accordions}>
      <h3 className={styles['main-title']}>{titles.subjects}</h3>
      <>
        {data.map(({ title, items }, index) => {
          return (
            <div
              key={index}
              className={cn(styles.item, {
                [styles.item_open]: isOpen[index]
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
      </>
    </div>
  );
};

export default Accordions;
