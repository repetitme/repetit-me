import { useState } from 'react';

import sortIcon from '../../assets/icons/iconSorting.svg';
import pencilIcon from '../../assets/icons/pencilIcon.svg';
import NewFeedbackForm from '../../features/NewFeedbackForm';
import Button from '../../shared/ui/button';
import FeedbackItem from '../../shared/ui/feedbackItem';
import { feedbackData } from './feedbackData';
import useFeedbackList from './useFeedbackList';

import styles from './index.module.scss';

import { TNewFeedback } from '../../features/NewFeedbackForm/type';
import { IFeedbackListProps } from './type';

const FeedbackList: React.FC<IFeedbackListProps> = ({ updateModalData }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { sortedFeedbacks, isAscending, toggleSort } = useFeedbackList({
    initialData: feedbackData,
    onDataChange: updateModalData
  });

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmitFeedback = (newFeedback: TNewFeedback) => {
    console.log('Форма отправлена:', newFeedback);
  };

  if (isFormVisible) {
    return (
      <section className={styles.section}>
        <Button
          text="Вернуться к отзывам"
          variant="white"
          onClick={handleCloseForm}
          className={styles.backButton}
        />
        <NewFeedbackForm onSubmit={handleSubmitFeedback} />
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={styles.sort} onClick={toggleSort}>
          {isAscending ? 'Сначала новые' : 'Сначала старые'}
          <img
            src={sortIcon}
            alt="Иконка сортировки"
            className={styles.sort__arrows}
          />
        </button>
        <Button
          text="Написать отзыв"
          variant="white"
          icon={pencilIcon}
          className={styles.button}
          onClick={handleOpenForm}
        />
      </div>

      <ul className={styles.list}>
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
