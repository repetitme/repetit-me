import React from 'react';
import { FC } from 'react';
import styles from './style.module.scss';
import { disciplines, tutorsCard } from './data';
import Carousel from '../Сarousel';
import icon_arrowDown from '../../assets/img/icon-arrowdown.png';

export const QuickSelection: FC = () => {
  const listCount: number = 9;
  const renderedItems: React.ReactElement[] = [];

  for (let i = 0; i < listCount; i++) {
    renderedItems.push(
      <li className={styles.container__header_list_item}>
        <span className={styles.container__header_list_item_text}>
          {disciplines[i].discipline}
        </span>
      </li>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h1 className={styles.container__header_title}>
            Быстрый подбор
            <span className={styles.container__header_title_gradient}>
              {' '}
              репетитора
            </span>
          </h1>
          <ul className={styles.container__header_list}>
            <li className={styles.container__header_list_item}>
              <span className={styles.container__header_list_item_text}>
                Все
              </span>
            </li>
            {renderedItems}

            <li
              className={
                styles.container__header_list_more +
                ' ' +
                styles.container__header_list_item
              }
            >
              <span className={styles.container__header_list_item_text}>
                Ещё
              </span>
              <img
                className={styles.container__header_list_item_arrow}
                src={icon_arrowDown}
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
