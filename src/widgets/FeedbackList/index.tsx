import { useState } from 'react';
import sortIcon from '../../assets/icons/Icon_Sorting.svg';
import pencilIcon from '../../assets/icons/pencilIcon.svg';
import { feedbackData } from '../../assets/mockdata/feedbackData';
import Button from '../../shared/components/button';
import FeedbackItem from '../../shared/FeedbackItem';
import { TFeedbackProps } from '../../shared/FeedbackItem/type';
import styles from './index.module.scss';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<TFeedbackProps[]>(feedbackData);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const sortFeedbacksByDate = () => {
    const sortedFeedbacks = [...feedbacks].sort((a, b) => {
      return isAscending
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    });

    setFeedbacks(sortedFeedbacks);
    setIsAscending(!isAscending);
  };

  return (
    <section className={styles.section}>
      <div className={styles.button_container}>
        <button className={styles.sort_button} onClick={sortFeedbacksByDate}>
          {isAscending ? 'Сначала новые' : 'Сначала старые'}
          <img src={sortIcon} alt="Стрелочки для выбора сортировки" />
        </button>
        <Button
          text="Написать отзыв"
          variant="white"
          icon={pencilIcon}
          className={styles.feedback_button}
          // TODO: добавить onClick={onClick}
        />
      </div>

      <ul className={styles.feedback_list}>
        {feedbacks.map((feedback) => (
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
