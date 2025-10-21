import { useCallback, useState } from 'react';

export const MIN_LENGTH = 30;
export const MAX_LENGTH = 1000;
export const PATTERN = '^[А-Яа-яЁё0-9\\s\\-()/,.!:;?]+$';

const validateFeedback = (content: string) => {
  const trimmedLength = content.trim().length;
  const trimmedContent = content.trim();

  if (trimmedLength === 0) {
    return '';
  }

  if (trimmedContent.length > 0 && !new RegExp(PATTERN).test(trimmedContent)) {
    return 'Только кириллица, пробелы и цифры';
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
    content.trim().length > MAX_LENGTH ||
    (content.trim().length > 0 && !new RegExp(PATTERN).test(content.trim()));

  return {
    rating,
    content,
    error,
    onRatingChange,
    handleContentChange,
    isButtonDisabled
  };
};
