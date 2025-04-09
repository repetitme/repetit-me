import { useState, FC } from 'react';
import classNames from 'classnames';

import arrow_left from '../../assets/images/arrow-left.svg';
import arrow_right from '../../assets/images/arrow-right.svg';
import styles from './index.module.scss';
import { ITutorCardProps } from './type';


const Carousel: FC<ITutorCardProps> = ({ tutorsCard }) => {

  const cardCount: number = tutorsCard.length;
  const [firstCard, setfirstCard] = useState(0);
  const cardRenderedCount: number = 3;

  function changeCardNext():boolean {
    if (firstCard + cardRenderedCount < cardCount) {
      setfirstCard(firstCard + 1);
      return true;
    }
    return false
  }

  function changeCardPrevious():boolean {
    if (firstCard > 0) {
      setfirstCard(firstCard - 1);
      return true
    }
    return false
  }

  const isLeftArrowDisabled = firstCard ===0;
  const isRightArrowDisabled = firstCard + cardRenderedCount >= cardCount;


  return (
    <div className={styles.container}>
      <div className={styles.container__navigation}>
        <button
          className={classNames(
            isLeftArrowDisabled ? styles.container__navigation_button_lock : styles.container__navigation_button_unlock,
            styles.container__navigation_button,

          )}
          onClick={()=> !isLeftArrowDisabled && changeCardPrevious()}
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
            styles.container__navigation_button,
            isRightArrowDisabled ? styles.container__navigation_button_lock : styles.container__navigation_button_unlock
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
