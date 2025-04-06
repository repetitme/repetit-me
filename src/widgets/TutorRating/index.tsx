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

if (variant == 'brief' || variant == 'feedback') {
    return (
        <div
        className={classNames(
            styles.container,
            ratingColorState,
            variant == 'brief' ? styles.brief : styles.feedback
        )}
        >
        <div
            className={classNames(
            styles.container__content,
            variant == 'brief' ? styles.brief_content : styles.feedback_content
            )}
        >
            <span
            className={classNames(
                styles.container__content_rating,
                variant == 'brief'
                ? styles.brief_content_rating
                : styles.feedback_content_rating
            )}
            >
            {rating.toFixed(1)}
            </span>

            <img
            className={classNames(
                styles.container__content_star,
                variant == 'brief'
                ? styles.brief_content_star
                : styles.feedback_content_star
            )}
            src={star}
            />
        </div>
        </div>
    );
}
if (variant == 'card') {
    return (
    <div className={classNames(styles.container, styles.card)}>
        <div className={styles.container__left}>
            <span className={styles.container__left_title}>Рейтинг: </span>
            <span className={styles.container__left_rating}>
                {rating.toFixed(1)}
            </span>
            <img className={styles.container__left_star} src={star} />
        </div>
        <div className={styles.container__right}>
            <span className={styles.container__right_title}>Отзывы</span>
        </div>
    </div>
    );
}
};

export default TutorRating;
