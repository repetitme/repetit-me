import { FC } from 'react';

import classNames from 'classnames';

import PlusIconSwitcher from '../../shared/components/PlusIconSwitcher';
import { AccordionProps } from './types';
import styles from './accordion.module.scss';

const Accordion: FC<AccordionProps> = ({
  title,
  isOpen,
  onToggle,
  className,
  children
}) => {
  return (
    <div className={classNames(styles.accordion, className)}>
      <button className={styles.accordion__header} onClick={onToggle}>
        <div className={styles.accordion__title}>{title}</div>
        <PlusIconSwitcher isOpen={isOpen} />
      </button>
      <div
        className={classNames({
          [styles.accordion__collapse]: true,
          [styles.open]: isOpen
        })}
      >
        <div className={styles.accordion__content}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
