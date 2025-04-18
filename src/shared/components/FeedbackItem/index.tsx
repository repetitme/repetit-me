import StarRating from '../StarRating'
import { TFeedbackItemProps } from './type.ts'

import styles from './index.module.scss'

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
  )
}

export default FeedbackItem
