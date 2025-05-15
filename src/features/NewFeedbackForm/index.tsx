import Button from '../../shared/ui/button';
import StarRating from '../../shared/ui/starRating';
import { MAX_LENGTH, useFeedbackForm } from './useFeedbackForm';

import styles from '../NewFeedbackForm/index.module.scss';

import { NewFeedbackFormProps } from './type';

const NewFeedbackForm: React.FC<NewFeedbackFormProps> = ({ toggleVisible }) => {
  const {
    rating,
    content,
    error,
    onRatingChange,
    handleContentChange,
    isButtonDisabled
  } = useFeedbackForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: добавить отправку отзыва на сервер
    toggleVisible();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.form__title}>Оцените преподавателя</h3>
      <StarRating rating={rating} size={40} onRatingChange={onRatingChange} />

      <label className={styles.textarea}>
        <h4 className={styles.textarea__title}>Ваш отзыв</h4>
        <div className={styles.textarea__wrapper}>
          <textarea
            className={styles.textarea__area}
            value={content}
            onChange={handleContentChange}
            placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
            maxLength={MAX_LENGTH}
            required
          />
          {error && <p className={styles.textarea__error}>{error}</p>}
        </div>
      </label>

      <Button
        text="Отправить отзыв"
        variant="purple"
        disabled={isButtonDisabled}
        className={styles.form__button}
      />
    </form>
  );
};

export default NewFeedbackForm;
