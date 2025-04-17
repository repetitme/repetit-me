import { useState, FC } from 'react';
import classNames from 'classnames';

import arrow_left from '../../assets/images/arrow-left.svg';
import arrow_right from '../../assets/images/arrow-right.svg';
import styles from './index.module.scss';
import { ITutorCardProps } from './type';

const Carousel: FC<ITutorCardProps> = ({ tutorsCard }) => {
  const cardCount: number = tutorsCard.length;
  const [firstCard, setFirstCard] = useState(0);
  const CARD_RENDERED_COUNT: number = 3;

  const isLeftArrowDisabled = firstCard === 0;
  const isRightArrowDisabled = firstCard + CARD_RENDERED_COUNT >= cardCount;

  const changeCardNext = () => {
    if (!isRightArrowDisabled) {
      setFirstCard(firstCard + 1);
    }
  };

  const changeCardPrevious = () => {
    if (!isLeftArrowDisabled) {
      setFirstCard(firstCard - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__navigation}>
        <button
          className={classNames(styles.container__navigation_button, {
            [styles.container__navigation_button_lock]: isLeftArrowDisabled,
            [styles.container__navigation_button_unlock]: !isLeftArrowDisabled
          })}
          onClick={() => !isLeftArrowDisabled && changeCardPrevious()}
        >
          <img
            src={arrow_left}
            className={styles.container__navigation_button_arrow}
            alt="Предыдущие анкеты"
          />
        </button>
        <ul className={styles.container__navigation_cards}>
          {tutorsCard
            .map((tutor, index) => (
              <img
                className={styles.container__navigation_cards_card}
                src={tutor}
                key={`${tutor}-${index}`}
                alt={tutor}
              />
            ))
            .slice(firstCard, firstCard + CARD_RENDERED_COUNT)}
        </ul>
        <button
          className={classNames(styles.container__navigation_button, {
            [styles.container__navigation_button_lock]: isRightArrowDisabled,
            [styles.container__navigation_button_unlock]: !isRightArrowDisabled
          })}
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
