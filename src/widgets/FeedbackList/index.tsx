import { useState } from 'react';

import sortIcon from '../../assets/icons/iconSorting.svg';
import pencilIcon from '../../assets/icons/pencilIcon.svg';
import NewFeedbackForm from '../../features/NewFeedbackForm';
import Button from '../../shared/ui/button';
import ButtonBack from '../../shared/ui/buttonBack';
import FeedbackItem from '../../shared/ui/feedbackItem';
import { feedbackData } from './feedbackData';
import useFeedbackList from './useFeedbackList';

import styles from './index.module.scss';

import { IFeedbackListProps } from './type';

const FeedbackList: React.FC<IFeedbackListProps> = ({ updateModalData }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { sortedFeedbacks, isAscending, toggleSort } = useFeedbackList({
    initialData: feedbackData,
    onDataChange: updateModalData
  });

  const toggleVisible = () => setIsFormVisible((prev) => !prev);

  if (isFormVisible) {
    return (
      <section className={styles.section}>
        <ButtonBack text="Вернуться к отзывам" onClick={toggleVisible} />
        <NewFeedbackForm toggleVisible={toggleVisible} />
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={styles.sort} onClick={toggleSort}>
          {isAscending ? 'Сначала старые' : 'Сначала новые'}
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
          onClick={toggleVisible}
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
