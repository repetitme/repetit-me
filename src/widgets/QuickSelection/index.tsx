import React, { FC } from 'react';
import classNames from 'classnames';
import Carousel from '../Сarousel';
import styles from './index.module.scss';

import { disciplines, tutorsCard } from './data';
import icon_arrowDown from '../../assets/img/icon-arrowdown.svg';

export const QuickSelection: FC = () => {
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
            <li className={styles.container__header_list_item}>
              <span className={styles.container__header_list_item_text}>
                Все
              </span>
            </li>
            {disciplines
              .map((discipline) => (
                <li className={styles.container__header_list_item}>
                  <span className={styles.container__header_list_item_text}>
                    {discipline.discipline}
                  </span>
                </li>
              ))
              .slice(0, 9)}

            <li
              className={classNames(
                styles.container__header_list_more,
                styles.container__header_list_item
              )}
            >
              <span className={styles.container__header_list_item_text}>
                Ещё
              </span>
              <img
                className={styles.container__header_list_item_arrow}
                src={icon_arrowDown}
                alt="ещё"
              ></img>
            </li>
          </ul>
        </div>

        <Carousel tutorsCard={tutorsCard} />
        <div className={styles.container__all}>
          <button className={styles.container__all_button}>
            <span className={styles.container__all_button_text}>
              Посмотреть всех
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuickSelection;
