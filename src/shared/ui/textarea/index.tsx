import { useEffect, useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import TextareaProps from './type';

const Textarea = ({
  label,
  htmlFor,
  className,
  value = '',
  onChange,
  onError,
  placeholder,
  title,
  minLength,
  maxLength,
  pattern,
  name,
  ...props
}: TextareaProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError(validate(e.target));
    setIsTouched(true);
    onChange?.(e);
  };

  const validate = (target: HTMLTextAreaElement): string => {
    if (pattern && !new RegExp(pattern).test(target.value)) {
      return 'Только кириллические буквы, цифры и знаки препинания';
    }
    if (target.value.length < (minLength || 0)) {
      return 'Минимум 100 символов';
    }
    if (target.value.length > (maxLength || 0)) {
      return 'Максимум 2000 символов';
    }
    return '';
  };

  const shouldShowError = isTouched && error;

  useEffect(() => {
    onError && onError(error, name || '');
  }, [error, name]);

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <div className={styles.textarea + ' ' + className}>
      {label && (
        <label className={styles.textarea__label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={htmlFor}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={shouldShowError ? '' : placeholder}
        title={title}
        minLength={minLength}
        maxLength={maxLength}
        className={cn(styles.textarea__area, {
          [styles.error]: shouldShowError
        })}
        {...props}
      />
      <span
        className={cn(styles.textarea__error, {
          [styles.active]: shouldShowError
        })}
      >
        {error}
      </span>
    </div>
  );
};

export default Textarea;
