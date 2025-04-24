import { FC } from 'react';
import classNames from 'classnames';

import { IDropdownProps } from './type';
import styles from './index.module.scss';

export const Dropdown: FC<IDropdownProps> = ({
  list,
  stateMore,
  setStateMore,
  setStateOption,
  setStateItemOther
}) => {
  const handleItemClick = (disciplineId: string) => {
    setStateOption(disciplineId);
    setStateItemOther(true);
    setStateMore(false);
  };
  return (
    <ul
      className={classNames(styles.container, {
        [styles.container__disabled]: !stateMore
      })}
    >
      {list.map((discipline) => {
        return (
          <li
            className={classNames(styles.container__item)}
            key={discipline.id}
            onClick={() => handleItemClick(discipline.id)}
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
