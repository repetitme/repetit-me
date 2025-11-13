import { useCallback, useState } from 'react';

export const MIN_LENGTH = 10;
export const MAX_LENGTH = 1000;

const validateAddInfo = (content: string) => {
  const trimmedLength = content.trim().length;

  if (trimmedLength === 0) {
    return '';
  }

  if (trimmedLength < MIN_LENGTH) {
    return `Дополнительная информация должна содержать минимум ${MIN_LENGTH} символов`;
  }

  if (trimmedLength > MAX_LENGTH) {
    return `Дополнительная информация не должна превышать ${MAX_LENGTH} символов`;
  }

  if (/[^a-zA-Z0-9а-яА-ЯёЁ\s.,!?()-]/.test(content)) {
    return 'Дополнительная информация содержит недопустимые символы';
  }

  return '';
};

export const useAddInfo = (initialContent = '') => {
  const [content, setContent] = useState(initialContent);
  const [error, setError] = useState('');

  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newContent = e.target.value;
      setContent(newContent);
      setError(validateAddInfo(newContent));
    },
    []
  );

  return {
    content,
    error,
    handleContentChange
  };
};
