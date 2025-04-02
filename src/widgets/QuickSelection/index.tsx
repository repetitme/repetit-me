import { useState, FC } from 'react';
import classNames from 'classnames';

import Carousel from '../Сarousel';
import Button from '../../shared/components/Button';

import { disciplines, tutorsCard } from './data';
import styles from './index.module.scss';
import icon_arrowDown from '../../assets/images/icon-arrowdown.svg';

export const QuickSelection: FC = () => {
  const [stateOption, setStateOption] = useState('all');
  const [stateMore, setStateMore] = useState(false);
  const [stateItemOther, setStateItemOther] = useState(false);

  return (
    <>
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
                stateOption == 'all' ? styles.container__header_item_active : ''
              )}
              onClick={() => {
                setStateOption('all');
                setStateItemOther(false);
                setStateMore(false);
              }}
            >
              <span className={styles.container__header_list_item_text}>
                Все
              </span>
            </li>
            {disciplines
              .map((discipline) => {
                const changeDiscipline = () => {
                  setStateOption(discipline.id);
                  setStateItemOther(discipline.other);
                  setStateMore(false);
                };

                return (
                  <li
                    className={classNames(
                      styles.container__header_list_item,
                      stateOption == discipline.id
                        ? styles.container__header_item_active
                        : ''
                    )}
                    key={discipline.id}
                    onClick={changeDiscipline}
                  >
                    <span className={styles.container__header_list_item_text}>
                      {discipline.discipline}
                    </span>
                  </li>
                );
              })
              .slice(0, 9)}

            <li
              className={classNames(
                styles.container__header_list_more,
                styles.container__header_list_item,
                stateItemOther == true
                  ? styles.container__header_item_active
                  : ''
              )}
              onClick={() => {
                setStateOption('more');
                setStateItemOther(true);
                setStateMore(!stateMore);
              }}
            >
              <span className={styles.container__header_list_item_text}>
                Ещё
              </span>
              <img
                className={styles.container__header_list_item_arrow}
                src={icon_arrowDown}
                alt="ещё"
              />
            </li>
          </ul>
          <ul
            className={classNames(
              stateMore == true
                ? styles.container__header_more
                : styles.container__header_more_disabled
            )}
          >
            {disciplines
              .map((discipline) => {
                const handleClick = () => {
                  setStateMore(false);
                  setStateItemOther(discipline.other);
                  setStateOption(discipline.id);
                };

                return (
                  <li
                    className={classNames(styles.container__header_more_item)}
                    key={discipline.id}
                    onClick={handleClick}
                  >
                    <span className={styles.container__header_more_item_text}>
                      {discipline.discipline}
                    </span>
                  </li>
                );
              })
              .slice(9, 14)}
          </ul>
        </div>

        <Carousel tutorsCard={tutorsCard} />

        <Button
          text={'Посмотреть всех'}
          variant={'purple'}
          className={styles.container__button}
        />
      </div>
    </>
  );
};

export default QuickSelection;
