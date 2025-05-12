import React, { useState } from 'react';

import Button from '../../shared/ui/button';
import StarRating from '../../shared/ui/starRating';

import styles from '../NewFeedbackForm/index.module.scss';

import { NewFeedbackFormProps } from './type';

const MIN_LENGTH = 5;
const MAX_LENGTH = 500;

const NewFeedbackForm: React.FC<NewFeedbackFormProps> = ({ toggleVisible }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const onRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    const trimmedLength = newContent.trim().length;

    if (trimmedLength === MAX_LENGTH) {
      setError(`Отзыв не должен превышать ${MAX_LENGTH} символов`);
    } else if (trimmedLength < MIN_LENGTH) {
      setError(`Отзыв должен содержать минимум ${MIN_LENGTH} символов`);
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: добавить отправку отзыва на сервер

    toggleVisible();
  };

  const isButtonDisabled =
    rating === 0 ||
    content.trim().length < MIN_LENGTH ||
    content.trim().length > MAX_LENGTH;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.form__title}>Оцените преподавателя</h3>
      <StarRating rating={rating} size={40} onRatingChange={onRatingChange} />

      <label>
    <h4 className={styles.form__title_textarea}>Ваш отзыв</h4>
    <div className={styles.form__textarea_wrapper}>
      <textarea
        className={styles.form__textarea}
        value={content}
        onChange={handleContentChange}
        placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
        maxLength={MAX_LENGTH}
        required
      />
      {error && <p className={styles.form__error}>{error}</p>}
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
