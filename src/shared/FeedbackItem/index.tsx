import StarRating from '../StarRating';
import styles from './index.module.scss';
import { TFeedbackProps } from './type';

export const FeedbackItem: React.FC<TFeedbackProps> = ({
  name,
  image,
  content,
  rating,
  date
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.info}>
        <img src={image} alt="фото студента" className={styles.image} />
        <p className={styles.name}>{name}</p>
        <p className={styles.date}>{date.toLocaleDateString()}</p>
        <StarRating color={'yellow'} rating={rating} />
        </div>
        <p className={styles.content}>{content}</p>
     
    </article>
  );
};

export default FeedbackItem;
