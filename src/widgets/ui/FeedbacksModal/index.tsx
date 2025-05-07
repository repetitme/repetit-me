import { FC, useCallback, useState } from 'react';

import CloseIcon from '../../../assets/icons/closeIcon.svg';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import { ModalOverlay } from '../../../shared/ui/overlay';
import TutorRating from '../../../shared/ui/tutorRating';
import FeedbackList from '../../FeedbackList';

import styles from './index.module.scss';

import { IFeedbacksModalProps } from './type';

const FeedbacksModal: FC<IFeedbacksModalProps> = ({ onClose }) => {
  const [feedbackData, setFeedbackData] = useState({ count: 0, rating: 0 });

  const modalRef = useClickOutside(onClose);

  const updateModalData = useCallback((ratings: number[]) => {
    const average =
      ratings.length > 0
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
        : 0;
    setFeedbackData({ count: ratings.length, rating: average });
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
            <TutorRating rating={feedbackData.rating} variant="medium" />
            <p className={styles.modal__ratingQuantity}>
              {feedbackData.count} {getReviewText(feedbackData.count)}
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

export default FeedbacksModal;

