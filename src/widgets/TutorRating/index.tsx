import { useState, useEffect } from 'react';

import star from '../../assets/icons/star.svg';

import classNames from 'classnames';
import styles from './index.module.scss';
import { TutorRatingProps } from './type';

const TutorRating: React.FC<TutorRatingProps> = ({ rating }) => {
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

return (
    <div className={classNames(styles.container, ratingColorState)}>
    <div className={styles.container__content}>
        <p className={styles.container__content_rating}>{rating.toFixed(1)}</p>
        <img className={styles.container__content_star} src={star} />
    </div>
    </div>
);
};

export default TutorRating;
