import { useMemo } from 'react';

import star from '../../../assets/icons/star.svg';

import classNames from 'classnames';
import styles from './index.module.scss';
import { TutorRatingProps } from './type';

const TutorRating: React.FC<TutorRatingProps> = ({ variant, rating }) => {
  const variantClassMap = {
    small: [
      styles.small,
      styles.small_content,
      styles.small_content_rating,
      styles.small_content_star
    ],
    medium: [
      styles.medium,
      styles.medium_content,
      styles.medium_content_rating,
      styles.medium_content_star
    ],
    large: [styles.large]
  };

  const getRatingColor = (rating: number) => {
    if (rating <= 2.9) {
      return styles.rating_red;
    }
    if (rating <= 3.9) {
      return styles.rating_purple;
    }
    if (rating <= 5) {
      return styles.rating_blue;
    }
  };

  const ratingColor = useMemo(() => getRatingColor(rating), [rating]);

  const sizeClass = variantClassMap[variant];

  const isSmall = variant === 'small';
  const isMedium = variant === 'medium';
  const isLarge = variant === 'large';

  if (isSmall || isMedium) {
    return (
      <div className={classNames(styles.container, ratingColor, sizeClass[0])}>
        <div className={classNames(styles.container__content, sizeClass[1])}>
          <span
            className={classNames(
              styles.container__content_rating,
              sizeClass[2]
            )}
          >
            {rating.toFixed(1)}
          </span>

          <img
            className={classNames(styles.container__content_star, sizeClass[3])}
            src={star}
            alt="Rating star"
          />
        </div>
      </div>
    );
  }
  if (isLarge) {
    return (
      <div className={classNames(styles.container, sizeClass[0])}>
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
