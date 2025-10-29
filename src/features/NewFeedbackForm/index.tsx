import Button from '../../shared/ui/button';
import StarRating from '../../shared/ui/starRating';
import Textarea from '../../shared/ui/textarea';
import { MAX_LENGTH, MIN_LENGTH, useFeedbackForm } from './useFeedbackForm';

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
      <Textarea
        value={content}
        onChange={handleContentChange}
        label="Ваш отзыв"
        placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        required
        error={error}
      />
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
