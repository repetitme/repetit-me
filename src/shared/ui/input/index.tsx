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
  requiredError,
  onChange
}) => {
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    let error = '';
    if (e.target.validity.valueMissing && required) {
      error = requiredError || 'Поле обязательно для заполнения';
    } else if (e.target.validity.patternMismatch && title) {
      error = title;
    }
    setError(error);
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
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <span className="error__text">{error}</span>}
    </div>
  );
};

export default Input;
