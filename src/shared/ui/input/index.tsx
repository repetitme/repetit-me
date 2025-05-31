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
  const isPrice: boolean = variant === 'price';

  const validate = (target: HTMLInputElement): string => {
    if (target.validity.valueMissing && required) {
      return requiredError;
    }
    if (target.validity.typeMismatch) {
      return title || target.validationMessage;
    }
    if (target.validity.patternMismatch) {
      return title || target.validationMessage;
    }
    return '';
  };

  const formatNumber = (value: string): string => {
    return (
      value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
      (isPrice ? ' ₽' : '')
    );
  };

  const formatInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    // Запрещает вводить буквы в поле с ценой
    if (isPrice) {
      value = value.replace(/\D/g, '');
    }
    // Добавляет пробелы между тысячами, если строка из цифр
    if (/^[0-9\s₽]+$/.test(value) && type !== 'number') {
      value = formatNumber(value);
    }
    onChange({
      target: { value: value }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // Исправляет Backspace для поля с ценой
    if (e.key === 'Backspace' && isPrice) {
      onChange({
        target: {
          value: formatNumber(value.replace(/\D/g, '').slice(0, -1))
        }
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (variant === 'auth') {
      onChange(e);
    } else {
      formatInput(e);
    }
    setError(validate(e.target));
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
      <span className={cn(styles.error__text, { [styles.error__active]: error })}>{error}</span>
    </div>
  );
};

export default Input;
