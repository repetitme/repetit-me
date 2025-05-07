import React, { useState } from 'react';

import Button from '../../shared/ui/button';
import StarRating from '../../shared/ui/starRating';

import styles from '../NewFeedbackForm/index.module.scss';

import { NewFeedbackFormProps } from './type';

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

    if (newContent.trim().length < 5) {
      setError(`Отзыв должен содержать минимум 5 символов.`);
      return;
    }

    if (newContent.trim().length > 20) {
      setError(`Отзыв не должен превышать 500 символов.`);
      return;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: добавить отправку отзыва на сервер

    toggleVisible();
  };

  const isButtonDisabled =
    rating === 0 || content.trim().length < 5 || content.trim().length > 500;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <h3>Оцените преподавателя</h3>
        <StarRating rating={rating} size={40} onRatingChange={onRatingChange} />
      </div>

      <label>
        <h4>Ваш отзыв</h4>
        <textarea
          value={content}
          onInput={handleContentChange}
          placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
          maxLength={20}
          required
        />
      </label>
      {error && <p className={styles.form__error}>{error}</p>}

      <Button
        text="Отправить отзыв"
        variant="purple"
        disabled={isButtonDisabled}
      />
    </form>
  );
};

export default NewFeedbackForm;
