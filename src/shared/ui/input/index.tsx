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
  onlyNumber = false,
  onError
}) => {
  const [error, setError] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
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
    if (
      pattern &&
      !new RegExp(pattern).test(target.value) &&
      target.name !== 'link'
    ) {
      return title || 'Некорректный формат';
    }
    if (target.value.length < (minLength || 0) && target.name === 'tg') {
      return 'Минимальная длина никнейма - 3 символа';
    }
    if (target.value.length < (minLength || 0) && target.name === 'name') {
      return 'Минимальная длина имени - 3 символа';
    }
    if (target.type === 'email' && target.value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(target.value)) {
        return 'Введите корректный email. Например: example@mail.ru';
      }
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          target.value
        ) ||
        /\s/.test(target.value)
      ) {
        return 'Email должен содержать только латинские буквы (например: example@mail.ru)';
      }
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
      requestAnimationFrame(() => {
        inputRef.current!.setSelectionRange(
          cursorPositionRef.current || value.length,
          cursorPositionRef.current || value.length
        );
      });
      if (parseInt(value.replace(/\D/g, '')) > 9999 && isPrice) {
        value = '10 000 ₽';
      }
    }
    if (name === 'tg' && value && !value.startsWith('@')) {
      value = '@' + value;
      requestAnimationFrame(() => {
        inputRef.current!.setSelectionRange(value.length, value.length);
      });
    }
    if (name === 'date') {
      if ((value.length === 2 || value.length === 5) && !value.endsWith('.')) {
        value += '.';
        requestAnimationFrame(() => {
          inputRef.current!.setSelectionRange(value.length, value.length);
        });
      }
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
    }
    if (name === 'time') {
      if (value.length === 2 && !value.endsWith(':')) {
        value += ':';
        requestAnimationFrame(() => {
          inputRef.current!.setSelectionRange(value.length, value.length);
        });
      }
      if (value.length > 5) {
        value = value.slice(0, 5);
      }
    }
    if (inputRef.current) {
      cursorPositionRef.current = inputRef.current.selectionStart;
    }
    onChange({
      target: { value: value, name, validity: e.target.validity }
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
    formatInput(e);
    if (isTouched) {
      setTimeout(() => setError(validate(e.target)), 0);
    }
  };
  const handleBlur = (): void => {
    setIsFocused(false);
    setIsTouched(true);
    if (inputRef.current) {
      setError(validate(inputRef.current));
    }
  };

  useEffect(() => {
    onError && onError(error, name || '');
  }, [error, isFocused, name]);

  const handleFocus = (): void => {
    setIsFocused(true);
    onError && onError(error, name || '');
  };

  const wrapperClasses = cn(
    styles['input-wrapper'],
    styles[variant],
    error && styles['input-wrapper--gap'],
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
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span
          className={cn(styles.error__text, {
            [styles.error__active]: error
          })}
        >
          {error}
        </span>
      </div>
    </div>
  );
};

export default Input;
