import { useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import IInput from './types';

const Input: React.FC<IInput> = ({
  variant = 'default',
  name,
  label,
  placeholder,
  value,
  type,
  required,
  style,
  extraClass,
  pattern,
  title,
  requiredError = 'Поле обязательно для заполнения',
  onChange
}) => {
  const [error, setError] = useState<string>('');

  const maxLength = type === 'url' || name === 'link' ? 500 : 100;

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let error = '';
    if (e.target.validity.valueMissing && required) {
      error = requiredError;
    }
    if (e.target.validity.typeMismatch) {
      error = title || e.target.validationMessage;
    }
    if (e.target.validity.patternMismatch) {
      error = title || e.target.validationMessage;
    }
    setError(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    validateInput(e);
  };

  const wrapperClasses = cn(styles['input-wrapper'], extraClass, {
    [styles.auth]: variant === 'auth'
  });

  return (
    <div className={wrapperClasses} style={style}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={cn(styles.input, { [styles.error]: error })}
        required={required}
        autoComplete={name === 'code' ? 'off' : 'on'}
        name={name}
        pattern={pattern}
        title={title}
        type={type}
        placeholder={error ? '' : placeholder}
        minLength={3}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      />
      {error && <span className={styles.error__text}>{error}</span>}
    </div>
  );
};

export default Input;
