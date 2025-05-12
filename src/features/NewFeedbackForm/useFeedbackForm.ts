import { useCallback, useState } from 'react';

const MIN_LENGTH = 5;
export const MAX_LENGTH = 500;

const validateFeedback = (content: string) => {
  const trimmedLength = content.trim().length;

  if (trimmedLength === 0) {
    return '';
  }

  if (trimmedLength < MIN_LENGTH) {
    return `Отзыв должен содержать минимум ${MIN_LENGTH} символов`;
  }

  if (trimmedLength > MAX_LENGTH) {
    return `Отзыв не должен превышать ${MAX_LENGTH} символов`;
  }

  return '';
};

export const useFeedbackForm = (initialRating = 0, initialContent = '') => {
  const [rating, setRating] = useState(initialRating);
  const [content, setContent] = useState(initialContent);
  const [error, setError] = useState('');

  const onRatingChange = useCallback((newRating: number) => {
    setRating(newRating);
  }, []);

  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newContent = e.target.value;
      setContent(newContent);
      setError(validateFeedback(newContent));
    },
    []
  );

  const isButtonDisabled =
    rating === 0 ||
    content.trim().length < MIN_LENGTH ||
    content.trim().length > MAX_LENGTH;

  return {
    rating,
    content,
    error,
    onRatingChange,
    handleContentChange,
    isButtonDisabled
  };
};
