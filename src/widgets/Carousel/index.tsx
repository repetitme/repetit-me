import { FC, useState } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import arrow_left from '../../assets/images/arrow-left.svg';
import arrow_right from '../../assets/images/arrow-right.svg';
import UserCard from '../UserCard';

import styles from './index.module.scss';

import { ITutorCardProps } from './type';

const Carousel: FC<ITutorCardProps> = ({ tutorsCard, change }) => {
  const { role } = useAppContext();
  const navigate = useNavigate();
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

  const limitedLink = (tutor: string) => {
    (role === 'student' || role === 'unauth') &&
      navigate(`/tutor-catalog/${tutor}`);
  };
  return (
    <div
      className={classNames(styles.container, {
        [styles.container__change]: change
      })}
    >
      <button
        className={classNames(styles.container__button, {
          [styles.container__button_lock]: isLeftArrowDisabled,
          [styles.container__button_unlock]: !isLeftArrowDisabled
        })}
        onClick={() => !isLeftArrowDisabled && changeCardPrevious()}
      >
        <img
          src={arrow_left}
          className={styles.container__button_arrow}
          alt="Предыдущие анкеты"
        />
      </button>
      <ul className={styles.container__cards}>
        {tutorsCard
          .map((tutor, index) => (
            <li
              className={styles.container__cards_card}
              key={index}
              onClick={() => limitedLink(tutor.id)}
            >
              <UserCard role="card" tutorData={tutor} />
            </li>
          ))
          .slice(firstCard, firstCard + CARD_RENDERED_COUNT)}
      </ul>
      <button
        className={classNames(styles.container__button, {
          [styles.container__button_lock]: isRightArrowDisabled,
          [styles.container__button_unlock]: !isRightArrowDisabled
        })}
        onClick={changeCardNext}
      >
        <img
          src={arrow_right}
          className={styles.container__button_arrow}
          alt="Следующие анкеты"
        />
      </button>
    </div>
  );
};
export default Carousel;
