import { FC, useCallback, useState } from 'react';

import CloseIcon from '../../../assets/icons/closeIcon.svg';
import { ModalOverlay } from '../../../shared/components/Overlay';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import FeedbackList from '../../FeedbackList';

import styles from './index.module.scss';

import { TFeedbackItemProps } from '../../../shared/components/FeedbackItem/type';
import { IFeedbacksModalProps } from './type';

export const FeedbacksModal: FC<IFeedbacksModalProps> = ({ onClose }) => {
  const [feedbackCount, setFeedbackCount] = useState(15);
  const [averageRating, setAverageRating] = useState(0);

  const modalRef = useClickOutside(onClose);

  const updateModalData = useCallback((feedbacks: TFeedbackItemProps[]) => {
    const count = feedbacks.length;
    const average =
      count > 0
        ? feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / count
        : 0;

    setFeedbackCount(count);
    setAverageRating(average);
  }, []);

  const getReviewText = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return 'отзыв';
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastTwoDigits < 12 || lastTwoDigits > 14)
    ) {
      return 'отзыва';
    } else {
      return 'отзывов';
    }
  };

  return (
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Отзывы</h2>
          <div className={styles.modal__rating}>
            <div className={styles.modal__ratingAverage}>{averageRating}</div>
            <p className={styles.modal__ratingQuantity}>
              {feedbackCount} {getReviewText(feedbackCount)}
            </p>
          </div>
          <button className={styles.modal__buttonClose} onClick={onClose}>
            <img
              src={CloseIcon}
              className={styles.modal__icon}
              alt="иконка для закрытия модального окна"
            />
          </button>
        </div>
        <FeedbackList updateModalData={updateModalData} />
      </div>
    </>
  );
};
