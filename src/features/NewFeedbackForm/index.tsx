import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../shared/button';
import StarRating from '../../shared/components/StarRating';

import { TNewFeedback } from './type';

const NewFeedbackForm: React.FC<TNewFeedback> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0); // Состояние для хранения выбранного рейтинга
  const [content, setContent] = useState(''); // Состояние для хранения текста отзыва

  const onRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value); // Обновляем текст отзыва
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь вы можете обработать отправку отзыва, например, отправить его на сервер
    onSubmit ({ rating, content });
  };

  return (
    <div>
      <Link to="/path">Вернуться к отзывам</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <h3>Оцените преподавателя</h3>
          <StarRating
            rating={rating}
            size={40}
            onRatingChange={onRatingChange}
          />
        </div>

        <label>
        <h4>Ваш отзыв</h4>
          <textarea
            value={content}
            onChange={handleContentChange} 
            placeholder="Общее впечатление; что понравилось в уроках; какие результаты"
          />
        </label>

        <Button text="Отправить отзыв" variant="purple" />
      </form>
    </div>
  );
};

export default NewFeedbackForm;
