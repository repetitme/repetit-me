import { FC } from 'react';

import classNames from 'classnames';

import cross from '../../assets/images/added_cross.svg';
import { AccordionProps } from './types';
import styles from './styles.module.scss';

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
        <img
          src={cross}
          alt="Закрывающая иконка аккордеона"
          className={classNames(styles.accordion__icon, {
            [styles['accordion__icon--open']]: isOpen
          })}
        />
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
