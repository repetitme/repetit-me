<<<<<<< HEAD:src/shared/components/FeedbackItem/index.tsx
import StarRating from '../StarRating';
import { TFeedbackItemProps } from './type.ts';
=======
import StarRating from '../starRating/index.tsx'
import { TFeedbackItemProps } from './type.ts'
>>>>>>> 6438a5bc3ba43b63b31e8fe0aa47de540fbc5ca3:src/shared/ui/feedbackItem/index.tsx

import styles from './index.module.scss';

export const FeedbackItem: React.FC<TFeedbackItemProps> = ({
  name,
  image,
  content,
  rating,
  date
}) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt="фото студента" className={styles.image} />

        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date.toLocaleDateString()}</p>
        </div>

        <StarRating rating={rating} />
      </div>

      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default FeedbackItem;
