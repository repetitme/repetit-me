import cn from 'classnames';

import styles from '../index.module.scss';

import { TAccordions } from '../types';

const Accordions = ({
  data,
  isOpen,
  titles,
  toggleAccordion,
  Checkbox,
  values,
  handleChange
}: TAccordions): React.JSX.Element => {
  return (
    <div className={styles.accordions}>
      <h3 className={styles.filters__title}>{titles.subjects}</h3>
      <>
        {data.map(({ title, items }, index) => {
          return (
            <div
              key={index}
              className={cn(styles.accordions_item, {
                [styles.accordions__open]: isOpen[index]
              })}
            >
              <button
                type="button"
                className={styles.accordions__button}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={styles.accordions__title}>{title}</h3>
                <span className={styles.accordions__chevron} />
              </button>
              <div className={styles.accordions__content}>
                {Checkbox({
                  title,
                  items,
                  index,
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
