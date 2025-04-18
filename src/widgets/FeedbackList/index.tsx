import { useMemo, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import sortIcon from '../../assets/icons/iconSorting.svg';
import pencilIcon from '../../assets/icons/pencilIcon.svg';
import Button from '../../shared/button';
import FeedbackItem from '../../shared/components/FeedbackItem';
import { feedbackData } from './feedbackData';

import styles from './index.module.scss';

import {
  TFeedbackItemProps,
  TNewFeedback
} from '../../shared/components/FeedbackItem/type';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] =
    useState<TFeedbackItemProps[]>(feedbackData);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [isFormVisible, setIsVisible] = useState<boolean>(false);

  const sortedFeedbacks = useMemo(() => {
    return [...feedbacks].sort((a, b) => {
      return isAscending
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    });
  }, [feedbacks, isAscending]);

  const toggleSortFeedbacks = () => setIsAscending((prev) => !prev);
  const toggleFormVisible = () => setIsVisible((prev) => !prev);

  const handleAddFeedback = (newFeedback: TNewFeedback) => {
    const feedbackToAdd: TFeedbackItemProps = {
      ...newFeedback,
      id: uuidv4(),
      date: new Date()
    };
    setFeedbacks((prev) => [feedbackToAdd, ...prev]);
  };

  return (
    <section className={styles.section}>
      <div className={styles.buttonContainer}>
        <button className={styles.sortButton} onClick={toggleSortFeedbacks}>
          {isAscending ? 'Сначала новые' : 'Сначала старые'}
          <img src={sortIcon} alt="Иконка сортировки" />
        </button>
        <Button
          text="Написать отзыв"
          variant="white"
          icon={pencilIcon}
          className={styles.feedbackButton}
          onClick={toggleFormVisible}
        />
      </div>

      {/* {isFormVisible && <FeedbackForm onAddFeedback={handleAddFeedback} />} */}

      <ul className={styles.feedbackList}>
        {sortedFeedbacks.map((feedback) => (
          <li key={feedback.id}>
            <FeedbackItem
              name={feedback.name}
              image={feedback.image}
              content={feedback.content}
              rating={feedback.rating}
              date={feedback.date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeedbackList;
