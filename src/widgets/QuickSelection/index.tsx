import { useState, FC } from 'react';
import classNames from 'classnames';

import icon_arrowDown from '../../assets/images/icon-arrowdown.svg';

import Carousel from '../Carousel';
import Button from '../../shared/components/Button';
import Dropdown from '../Dropdown';

import { disciplines, tutorsCard, dropdown } from './data';
import styles from './index.module.scss';

export const QuickSelection: FC = () => {
  const [stateOption, setStateOption] = useState<'all' | string>('all');
  const [stateMore, setStateMore] = useState(false);
  const [stateItemOther, setStateItemOther] = useState(false);
  const lastDiscipline = disciplines[disciplines.length - 1];
  const handleOptionChange = (
    itemOther: boolean,
    more: boolean,
    option: string
  ) => {
    setStateOption(option);
    setStateItemOther(itemOther);
    setStateMore(more);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__header_title}>
          Быстрый подбор{' '}
          <span className={styles.container__header_title_gradient}>
            репетитора
          </span>
        </h2>
        <ul className={styles.container__header_list}>
          <li
            className={classNames(
              styles.container__header_list_item,
              stateOption === 'all' && styles.container__header_item_active
            )}
            onClick={() => handleOptionChange(false, false, 'all')}
          >
            <span className={styles.container__header_list_item_text}>Все</span>
          </li>
          {disciplines
            .map((discipline) => {
              return (
                <li
                  className={classNames(
                    styles.container__header_list_item,
                    stateOption === discipline.id &&
                      styles.container__header_item_active
                  )}
                  key={discipline.id}
                  onClick={() =>
                    handleOptionChange(discipline.other, false, discipline.id)
                  }
                >
                  <span className={styles.container__header_list_item_text}>
                    {discipline.discipline}
                  </span>
                </li>
              );
            })
            .slice(0, disciplines.length - 1)}
          <li
            className={classNames(
              styles.container__header_list_more,
              styles.container__header_list_item,
              stateItemOther === true
                ? styles.container__header_item_active
                : ''
            )}
            onClick={() => {
              setStateMore(!stateMore);
              setStateItemOther(stateMore == true ? false : true);
            }}
          >
            <span className={styles.container__header_list_item_text}>
              {lastDiscipline.discipline}
            </span>
            <img
              className={styles.container__header_list_item_arrow}
              src={icon_arrowDown}
              alt="Ещё"
            />
          </li>
          <div className={styles.container__header_list_dropdown}>
            <Dropdown
              list={dropdown}
              setStateMore={setStateMore}
              setStateItemOther={setStateItemOther}
              setStateOption={setStateOption}
              stateMore={stateMore}
            />
          </div>
        </ul>
      </div>
      <Carousel tutorsCard={tutorsCard} />
      <Button
        text={'Посмотреть всех'}
        variant={'purple'}
        className={styles.container__button}
      />
    </div>
  );
};
export default QuickSelection;
