import { FC } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';
import { IDropdownProps } from './type';

export const Dropdown: FC<IDropdownProps> = ({
  list,
  stateMore,
  setStateMore,
  setStateOption,
  setStateItemOther
}) => {
  return (
    <ul
      className={classNames(
        stateMore == true
          ? styles.container
          : styles.container__disabled
      )}
    >
      {list.map((discipline) => {
        const handleClick = () => {
          setStateMore(false);
          setStateItemOther(discipline.other);
          setStateOption(discipline.id);
        };
        return (
          <li
            className={classNames(styles.container__item)}
            key={discipline.id}
            onClick={handleClick}
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
