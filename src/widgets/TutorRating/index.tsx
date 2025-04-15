import { useState, useEffect } from 'react';

import star from '../../assets/icons/star.svg';

import classNames from 'classnames';
import styles from './index.module.scss';
import { TutorRatingProps } from './type';

const TutorRating: React.FC<TutorRatingProps> = ({ variant, rating }) => {
  const [ratingColorState, setRatingColorState] = useState(styles.rating_red);
  useEffect(() => {
    if (rating <= 5) {
      setRatingColorState(styles.rating_blue);
    }

    if (rating <= 3.9) {
      setRatingColorState(styles.rating_purple);
    }

    if (rating <= 2.9) {
      setRatingColorState(styles.rating_red);
    }
  }, [rating]);

  const isSmall = variant === 'small';
  const isMedium = variant === 'medium';
  const isLarge = variant === 'large';

  if (isSmall || isMedium) {
    return (
      <div
        className={classNames(
          styles.container,
          ratingColorState,
          variant == 'small' ? styles.small : styles.medium
        )}
      >
        <div
          className={classNames(
            styles.container__content,
            variant == 'small' ? styles.small_content : styles.medium_content
          )}
        >
          <span
            className={classNames(
              styles.container__content_rating,
              variant == 'small'
                ? styles.small_content_rating
                : styles.medium_content_rating
            )}
          >
            {rating.toFixed(1)}
          </span>

          <img
            className={classNames(
              styles.container__content_star,
              variant == 'small'
                ? styles.small_content_star
                : styles.medium_content_star
            )}
            src={star}
            alt="Rating star"
          />
        </div>
      </div>
    );
  }
  if (isLarge) {
    return (
      <div className={classNames(styles.container, styles.large)}>
        <div className={styles.container__info}>
          <span className={styles.container__info_title}>Рейтинг: </span>
          <span className={styles.container__info_rating}>
            {rating.toFixed(1)}
          </span>
          <img
            className={styles.container__info_star}
            src={star}
            alt="Rating star"
          />
        </div>
        <button className={styles.container__button}>Отзывы</button>
      </div>
    );
  }
};

export default TutorRating;
