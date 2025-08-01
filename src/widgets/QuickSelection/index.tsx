import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router';

import icon_arrowDown from '../../assets/images/icon-arrowdown.svg';
import Button from '../../shared/ui/button';
import { mockTutors } from '../../widgets/UserCard/fakeApi/mockData';
import Carousel from '../Carousel';
import Dropdown from '../Dropdown';
import { disciplines, dropdown } from './data';

import styles from './index.module.scss';

export const QuickSelection = () => {
  const navigate = useNavigate();
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isMoreButton = (e.target as Element).closest(
        `.${styles.container__header_list_more}`
      );
      const isDropdown = dropdownRef.current?.contains(e.target as Node);

      if (!isMoreButton && !isDropdown) {
        setStateMore(false);
        setStateItemOther(false);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && stateMore) {
      setStateMore(false);
      setStateItemOther(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [stateMore]);

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
            onClick={(e) => {
              e.stopPropagation();
              setStateMore(!stateMore);
              setStateItemOther(!stateItemOther);
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
          <div
            className={styles.container__header_list_dropdown}
            ref={dropdownRef}
          >
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
      <Carousel tutorsCard={mockTutors} />
      <Button
        text={'Посмотреть всех'}
        variant={'purple'}
        className={styles.container__button}
        onClick={() => {
          navigate('/tutor-catalog');
        }}
      />
    </div>
  );
};
export default QuickSelection;
