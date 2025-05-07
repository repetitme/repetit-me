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
    setContent(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim().length < 5) {
      setError(`Отзыв должен содержать минимум 5 символов.`);
      return;
    }

    if (content.trim().length > 300) {
      setError(`Отзыв не должен превышать 300 символов.`);
      return;
    }

    // onSubmit({ rating, content });
    toggleVisible();
  };

  const isButtonDisabled = rating === 0 || content.trim() === '';

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
          onChange={handleContentChange}
          placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
          minLength={5}
          maxLength={300}
          required
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}

      <Button
        text="Отправить отзыв"
        variant="purple"
        disabled={isButtonDisabled}
      />
    </form>
  );
};

export default NewFeedbackForm;
