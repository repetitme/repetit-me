import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import IInput from './types';

export const formatNumber = (value: string, isPrice: boolean): string => {
  return (
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
    (isPrice ? ' ₽' : '')
  );
};

const Input: React.FC<IInput> = ({
  variant = 'form',
  name,
  label,
  placeholder,
  value = '',
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
  onChange,
  onlyNumber = false
}) => {
  const [error, setError] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPositionRef = useRef<number | null>(null);
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
    if (pattern && !new RegExp(pattern).test(target.value)) {
      return title || 'Некорректный формат';
    }
    return '';
  };

  const formatInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { value, name } = e.target;
    if (isPrice || onlyNumber) {
      value = value.replace(/\D/g, '');
    }
    if (/^[0-9\s₽]+$/.test(value) && type !== 'number') {
      value = formatNumber(value, isPrice);
    }
    if (inputRef.current) {
      cursorPositionRef.current = inputRef.current.selectionStart;
    }
    onChange({
      target: { value: value, name }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    if (inputRef.current && cursorPositionRef.current !== null) {
      const position = cursorPositionRef.current;
      inputRef.current.setSelectionRange(position, position);
      cursorPositionRef.current = null;
    }
  }, [value]);

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Backspace' && isPrice) {
      onChange({
        target: {
          value: formatNumber(value.replace(/\D/g, '').slice(0, -1), isPrice)
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
    setTimeout(() => setError(validate(e.target)), 0);
  };

  const wrapperClasses = cn(
    styles['input-wrapper'],
    styles[variant],
    error && name !== 'price' && styles['input-wrapper--gap'],
    extraClass
  );

  return (
    <div className={wrapperClasses} style={style}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.error__wrapper}>
        <input
          ref={inputRef}
          id={name}
          className={cn(styles.input, { [styles.error]: error })}
          required={required}
          autoComplete={autoComplete}
          name={name}
          pattern={pattern}
          title={title}
          type={type}
          placeholder={error || (value && isFocused) ? '' : placeholder}
          disabled={disable}
          minLength={minLength}
          maxLength={maxLength}
          onKeyDown={handleBackspace}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {error && (
          <span
            className={cn(styles.error__text, {
              [styles.error__active]: error
            })}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
