import { FC } from 'react';

import classNames from 'classnames';

import styles from './index.module.scss';

import { IDropdownProps } from './type';

export const Dropdown: FC<IDropdownProps> = ({
  list,
  stateMore,
  setStateOption,
}) => {
  return (
    <ul
      className={classNames(styles.container, {
        [styles.container__active]: stateMore
      })}
    >
      {list.map((discipline) => {
        return (
          <li
            className={classNames(styles.container__item)}
            key={discipline.id}
            onClick={() => setStateOption(discipline.id)}
          >
            <span className={styles.container__item_text}>
              {discipline.discipline}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
