import { useMemo } from 'react';

import classNames from 'classnames';

import star from '../../../assets/icons/star.svg';

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
    if (rating > 5) {
      return styles.rating_red;
    }
  };

  const ratingColor = useMemo(() => getRatingColor(rating), [rating]);

  const sizeClass = variantClassMap[variant];

  const isSmall = variant === 'small';
  const isMedium = variant === 'medium';
  const isOnCard = variant === 'onCard';
  const isOnProfile = variant === 'onProfile';

  if (isSmall || isMedium) {
    return (
      <div className={classNames(styles.container, ratingColor, sizeClass[0])}>
        <div className={classNames(styles.container__content, sizeClass[1])}>
          <p
            className={classNames(
              styles.container__content_rating,
              sizeClass[2]
            )}
          >
            {rating.toFixed(1)}
          </p>

          <img
            className={classNames(styles.container__content_star, sizeClass[3])}
            src={star}
            alt="Rating star"
          />
        </div>
      </div>
    );
  }
  if (isOnCard) {
    return (
      <div className={classNames(styles.container, sizeClass[0])}>
        <div className={styles.container__info}>
          <p className={styles.container__info_title}>Рейтинг: </p>
          <p className={styles.container__info_rating}>{rating.toFixed(1)}</p>
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
   if (isOnProfile) {
    return (
      <div className={classNames(styles.container, styles.onProfile)}>
        <div className={styles.onProfile__content}>
          <img className={styles.onProfile__star} src={star} alt="Rating star" />
          <p className={styles.onProfile__text}>Рейтинг</p>
          <p className={styles.onProfile__rating}>{rating.toFixed(1)}</p>
        </div>
      </div>
    );
  }
};

export default TutorRating;
