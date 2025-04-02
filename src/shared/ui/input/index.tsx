import { useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import IInput from './types';

const Input: React.FC<IInput> = ({
  variant = 'form',
  name,
  label,
  placeholder,
  value,
  type,
  required,
  minLength,
  maxLength,
  autoComplete,
  disable,
  style,
  extraClass,
  pattern,
  title,
  requiredError = 'Поле обязательно для заполнения',
  onChange
}) => {
  const [error, setError] = useState<string>('');

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

  const numberFormatter = (value: string): string => {
    return (
      value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
      (variant === 'price' ? ' ₽' : '')
    );
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Исправляет Backspace для поля с ценой
    if (e.key === 'Backspace' && variant === 'price') {
      onChange({
        target: {
          value: numberFormatter(value.replace(/\D/g, '').slice(0, -1))
        }
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (variant === 'auth') {
      onChange(e);
    } else {
      let value = e.target.value;
      // Запрещает вводить буквы в поле с ценой
      if (variant === 'price') {
        value = e.target.value.replace(/\D/g, '');
      }
      // Добавляет пробелы между тысячами, если строка из цифр
      if (/^[0-9\s₽]+$/.test(e.target.value) && type !== 'number') {
        value = numberFormatter(value);
      }
      onChange({
        target: { value: value }
      } as React.ChangeEvent<HTMLInputElement>);
    }
    validateInput(e);
  };

  const wrapperClasses = cn(
    styles['input-wrapper'],
    styles[variant],
    extraClass
  );

  return (
    <div className={wrapperClasses} style={style}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        className={cn(styles.input, { [styles.error]: error })}
        required={required}
        autoComplete={autoComplete}
        name={name}
        pattern={pattern}
        title={title}
        type={type}
        placeholder={error ? '' : placeholder}
        disabled={disable}
        minLength={minLength}
        maxLength={maxLength}
        onKeyDown={handleBackspace}
        value={value}
        onChange={handleChange}
      />
      {error && <span className={styles.error__text}>{error}</span>}
    </div>
  );
};

export default Input;
