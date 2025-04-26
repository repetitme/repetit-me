
import sortIcon from '../../assets/icons/iconSorting.svg';
import pencilIcon from '../../assets/icons/pencilIcon.svg';
import Button from '../../shared/button';
import FeedbackItem from '../../shared/components/FeedbackItem';
import { feedbackData } from './feedbackData';
import useFeedbackList from './useFeedbackList';

import styles from './index.module.scss';

import { IFeedbackListProps } from './type';

const FeedbackList: React.FC<IFeedbackListProps> = ({ updateModalData }) => {
  const { sortedFeedbacks, isAscending, toggleSort } =
    useFeedbackList({
      initialData: feedbackData,
      onDataChange: updateModalData
    });

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
