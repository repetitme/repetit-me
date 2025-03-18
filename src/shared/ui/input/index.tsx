import './input.scss';
import TInput from './types';
import { useState } from 'react';

const Input: React.FC<TInput> = ({
  inputType,
  type,
  label,
  value,
  name,
  required,
  pattern,
  title,
  placeholder,
  extraClass,
  onChange
}) => {
  // Базовая валидация по UI kit (опционально)
  const [error, setError] = useState<string>('');
  const handleInvalid = (e: React.ChangeEvent<HTMLInputElement>) => {
    let error = '';
    if (!e.target.value && required) {
      e.preventDefault();
      error = 'Поле обязательно';
    }
    if (e.target.value && !required) {
      error = e.target.validationMessage;
      e.preventDefault();
    }
    if (e.target.validationMessage && !title) {
      e.target.setCustomValidity(e.target.validationMessage);
      setError(e.target.validationMessage);
    }
    e.target.setCustomValidity(error);
    setError(error);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (e.target.validity.patternMismatch && title) {
      e.target.setCustomValidity(e.target.validationMessage);
      setError(title);
    }
    if (e.target.value.length === 0) {
      e.target.setCustomValidity('');
      setError('');
    }
    if (e.target.validity.valid) {
      setError('');
      e.target.setCustomValidity('');
    }
    if (e.target.value && required) {
      e.target.reportValidity();
    }
  };

  return (
    <div
      className={`${'input-wrapper'} ${inputType !== 'Auth' ? 'primary' : ''} ${extraClass}`}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={`${'input'} ${error ? 'error' : ''}`}
        required={required}
        autoComplete={name === 'code' ? 'off' : 'on'}
        name={name}
        pattern={pattern}
        title={title}
        type={inputType === 'Auth' ? (name === 'link' ? 'url' : 'text') : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onInvalid={handleInvalid}
      />
      {error && <span className="error__text">{error}</span>}
    </div>
  );
};

export default Input;
