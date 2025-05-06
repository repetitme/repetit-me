import React, { useState } from 'react';

import Button from '../../shared/ui/button';
import StarRating from '../../shared/ui/starRating';

import { NewFeedbackFormProps } from './type';

const NewFeedbackForm: React.FC<NewFeedbackFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const onRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, content });
  };

  return (
    <div>
      
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
