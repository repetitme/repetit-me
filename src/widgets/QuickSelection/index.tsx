import { useState, useEffect, FC } from 'react';
import classNames from 'classnames';
import Carousel from '../Сarousel';
import styles from './index.module.scss';
import Button from '../../shared/components/Button';

import { disciplines, tutorsCard } from './data';
import icon_arrowDown from '../../assets/img/icon-arrowdown.svg';
import arrow_left from '../../assets/img/arrow-left.svg';
import arrow_right from '../../assets/img/arrow-right.svg';

export const QuickSelection: FC = () => {
  const cardCount: number = tutorsCard.length;
  const [state, setState] = useState(
    'styles.carousel__navigation_button_arrow_unlock'
  );
  console.log(state);
  const cardRenderedCount: number = 3;


  useEffect(() => {
    if (cardCount >= cardRenderedCount) {
      setState(styles.carousel__navigation_button_unlock);
    } else {
      setState(styles.carousel__navigation_button_lock);
    }
  }, []);

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

        <div className={styles.container__carousel}>
          <div className={styles.container__carousel_navigation}>
            <button
              className={classNames(
                { state },
                styles.container__carousel_navigation_button
              )}
            >
              <img
                src={arrow_left}
                className={styles.container__carousel_navigation_button_arrow}
                alt="Предыдущие анкеты"
              ></img>
            </button>
            <ul className={styles.container__carousel_navigation_cards}>
              {tutorsCard
                .map((tutor) => <Carousel tutor={tutor} />)
                .slice(0, 3)}
            </ul>
            <button
              className={classNames(
                { state },
                styles.container__carousel_navigation_button
              )}
            >
              <img
                src={arrow_right}
                className={styles.container__carousel_navigation_arrow}
                alt="Следующие анкеты"
              ></img>
            </button>
          </div>
        </div>

        <Button
          text={'Посмотреть всех'}
          variant={'purple'}
          className={styles.container__button}
        ></Button>
      </div>
    </>
  );
};

export default QuickSelection;
