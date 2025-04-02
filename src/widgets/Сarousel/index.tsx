import { useState, useEffect, FC } from 'react';
import classNames from 'classnames';

import arrow_left from '../../assets/images/arrow-left.svg';
import arrow_right from '../../assets/images/arrow-right.svg';

import styles from './index.module.scss';
import { ITutorCardProps } from './type';

const Carousel: FC<ITutorCardProps> = ({ tutorsCard }) => {
  const [stateRightArrow, setStateRightArrow] = useState(
    styles.container__navigation_button_unlock
  );
  const [stateLeftArrow, setStateLeftArrow] = useState(
    styles.container__navigation_button_unlock
  );
  const cardCount: number = tutorsCard.length;

  const [firstCard, setfirstCard] = useState(0);

  const cardRenderedCount: number = 3;

  function changeCardNext() {
    if (firstCard + cardRenderedCount < cardCount) {
      setStateLeftArrow(styles.container__navigation_button_unlock);
      setfirstCard(firstCard + 1);
    }
    if (firstCard + cardRenderedCount + 1 == cardCount) {
      setStateRightArrow(styles.container__navigation_button_lock);
    }
  }

  function changeCardPrevious() {
    if (firstCard > 0) {
      setStateRightArrow(styles.container__navigation_button_unlock);
      setfirstCard(firstCard - 1);
    }
    if (firstCard - 1 == 0) {
      setStateLeftArrow(styles.container__navigation_button_lock);
    }
  }

  useEffect(() => {
    if (cardCount > cardRenderedCount) {
      setStateLeftArrow(styles.container__navigation_button_unlock);
      setStateRightArrow(styles.container__navigation_button_unlock);
    } else {
      setStateLeftArrow(styles.container__navigation_button_lock);
      setStateRightArrow(styles.container__navigation_button_lock);
    }
    if (firstCard == 0) {
      setStateLeftArrow(styles.container__navigation_button_lock);
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container__navigation}>
        <button
          className={classNames(
            stateLeftArrow,
            styles.container__navigation_button
          )}
          onClick={changeCardPrevious}
        >
          <img
            src={arrow_left}
            className={styles.container__navigation_button_arrow}
            alt="Предыдущие анкеты"
          />
        </button>
        <ul className={styles.container__navigation_cards}>
          {tutorsCard
            .map((tutor) => (
              <img
                className={styles.container__navigation_cards_card}
                src={tutor}
              />
            ))
            .slice(firstCard, firstCard + cardRenderedCount)}
        </ul>
        <button
          className={classNames(
            stateRightArrow,
            styles.container__navigation_button
          )}
          onClick={changeCardNext}
        >
          <img
            src={arrow_right}
            className={styles.container__navigation_button_arrow}
            alt="Следующие анкеты"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
