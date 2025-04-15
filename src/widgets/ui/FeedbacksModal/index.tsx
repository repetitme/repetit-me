import { FC, useCallback, useState } from 'react';

import CloseIcon from '../../../assets/icons/closeIcon.svg'

import styles from './index.module.scss';
import { ModalOverlay } from '../../../shared/components/Overlay';

export const FeedbacksModal: FC = () => {
  const [reviewCount, setReviewCount] = useState(15);
  const [averageRating, setAverageRating] = useState(0);

  const updateReviewCount = useCallback((newCount: number) => {
    setReviewCount(newCount);
  }, []);

  const updateAverageRating = useCallback((newRating: number) => {
    setAverageRating(newRating);
  }, []);

  const getReviewText = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return 'отзыв';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
      return 'отзыва';
    } else {
      return 'отзывов';
    }
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Отзывы</h2>
          <div className={styles.modal__rating}>
            <div className={styles.modal__ratingAverage}>{averageRating}</div>
            <p className={styles.modal__ratingQuantity}>{reviewCount} {getReviewText(reviewCount)}</p>
          </div>
          <button className={styles.modal__buttonClose}>
            <img src={CloseIcon} className={styles.modal__icon} alt="иконка для закрытия модального окна" />
          </button>
        </div>
        <div className={styles.modal__content}></div>
      </div>
      {/* <ModalOverlay /> */}
    </>
  );
};