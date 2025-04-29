import { FC, useCallback, useState } from 'react';

import CloseIcon from '../../../assets/icons/closeIcon.svg';
import { ModalOverlay } from '../../../shared/components/Overlay';
import TutorRating from '../../../shared/components/TutorRating';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import FeedbackList from '../../FeedbackList';

import styles from './index.module.scss';

import { IFeedbacksModalProps } from './type';

export const FeedbacksModal: FC<IFeedbacksModalProps> = ({ onClose }) => {
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const modalRef = useClickOutside(onClose);

  const updateModalData = useCallback((raitings: number[]) => {
    const average =
      raitings.length > 0
        ? raitings.reduce((sum, rating) => sum + rating, 0) / raitings.length
        : 0;
    setFeedbackCount(raitings.length);
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
            <TutorRating rating={averageRating} variant="medium" />
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
        <div className={styles.modal__content}>
          <FeedbackList updateModalData={updateModalData} />
        </div>
      </div>
    </>
  );
};
