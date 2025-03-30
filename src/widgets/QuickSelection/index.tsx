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
  const [stateRightArrow, setStateRightArrow] = useState(
    styles.carousel__navigation_button_arrow_unlock
  );
  const [stateLeftArrow, setStateLeftArrow] = useState(
    styles.carousel__navigation_button_arrow_unlock
  );
  const [stateOption, setStateOption] = useState('all');

  const [firstCard, setfirstCard] = useState(0);

  const cardRenderedCount: number = 3;

  function changeCardNext() {
    if (firstCard + cardRenderedCount < cardCount) {
      setStateLeftArrow(styles.container__carousel_navigation_button_unlock);
      setfirstCard(firstCard + 1);
    }
    if (firstCard + cardRenderedCount + 1 == cardCount) {
      setStateRightArrow(styles.container__carousel_navigation_button_lock);
    }
  }

  function changeCardPrevious() {
    if (firstCard > 0) {
      setStateRightArrow(styles.container__carousel_navigation_button_unlock);
      setfirstCard(firstCard - 1);
    }
    if (firstCard - 1 == 0) {
      setStateLeftArrow(styles.container__carousel_navigation_button_lock);
    }
  }

  useEffect(() => {
    if (cardCount >= cardRenderedCount) {
      setStateLeftArrow(styles.container__carousel_navigation_button_unlock);
      setStateRightArrow(styles.container__carousel_navigation_button_unlock);
    } else {
      setStateLeftArrow(styles.container__carousel_navigation_button_lock);
      setStateRightArrow(styles.container__carousel_navigation_button_lock);
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
            <li
              className={classNames(
                styles.container__header_list_item,
                stateOption == 'all' ? styles.container__header_list_active : ''
              )}
              onClick={() => setStateOption('all')}
            >
              <span className={styles.container__header_list_item_text}>
                Все
              </span>
            </li>
            {disciplines
              .map((discipline) => {
                const handleClick = () => {
                  setStateOption(discipline.id);
                };

                return (
                  <li
                    className={classNames(
                      styles.container__header_list_item,
                      stateOption == discipline.id
                        ? styles.container__header_list_active
                        : ''
                    )}
                    key={discipline.id}
                    onClick={handleClick}
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
                stateOption == 'more'
                  ? styles.container__header_list_active
                  : ''
              )}
              onClick={() => setStateOption('more')}
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
                stateLeftArrow,
                styles.container__carousel_navigation_button
              )}
              onClick={changeCardPrevious}
            >
              <img
                src={arrow_left}
                className={styles.container__carousel_navigation_button_arrow}
                alt="Предыдущие анкеты"
              ></img>
            </button>
            <ul className={styles.container__carousel_navigation_cards}>
              {tutorsCard
                .map((tutor) => <Carousel key={tutor.id} {...tutor} />)
                .slice(firstCard, firstCard + 3)}
            </ul>
            <button
              className={classNames(
                stateRightArrow,
                styles.container__carousel_navigation_button,
                styles.container__carousel_navigation_button_next_button
              )}
              onClick={changeCardNext}
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
