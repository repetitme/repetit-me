import { useMemo } from 'react';

import classNames from 'classnames';

import star from '../../../assets/icons/star.svg';

import styles from './index.module.scss';

import { TutorRatingProps, VariantType } from './type';

const TutorRating: React.FC<TutorRatingProps> = ({
  variant,
  rating,
  setOpenModalState,
  disabled
}) => {
  const onClick = () => {
    setOpenModalState && setOpenModalState(true);
  };
  const variantClassMap: Record<VariantType, string[]> = {
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
    large: [styles.large],
    onProfile: [styles.large]
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
  const isLarge = variant === 'large';
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

  if (isLarge) {
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
        <button
          className={classNames(styles.container__button)}
          onClick={onClick}
          disabled={disabled}
        >
          Отзывы
        </button>
      </div>
    );
  }
  if (isOnProfile) {
    return (
      <div className={classNames(styles.container, styles.onProfile)}>
        <div className={styles.onProfile__info}>
          <img
            className={styles.onProfile__info_star}
            src={star}
            alt="Rating star"
          />
          <p className={styles.onProfile__info_title}>Рейтинг: </p>
          <p className={styles.onProfile__info_rating}>{rating.toFixed(1)}</p>
        </div>
        <button className={styles.onProfile__button} onClick={onClick}>
          Отзывы
        </button>
      </div>
    );
  }
};

export default TutorRating;
