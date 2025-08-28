import { useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import TextareaProps from './type';

const Textarea = ({
  label,
  error,
  htmlFor,
  className,
  minLength,
  pattern,
  value = '',
  onChange,

  ...props
}: TextareaProps) => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }

    if (minLength) {
      setShowError(
        e.target.value.length > 0 && e.target.value.length < minLength
      );
    }

     if (pattern && e.target.value) {
      const isValid = new RegExp(pattern).test(e.target.value);
      setShowError(!isValid);
      setErrorMessage(!isValid ? 'Только кириллица, пробелы и цифры' : '');
    }
  };
  return (
    <div className={styles.textarea + ' ' + className}>
      {label && (
        <label className={styles.textarea__label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <textarea
        onChange={handleChange}
        value={value}
        className={cn(styles.textarea__area, { [styles.error]: showError })}
        {...props}
      />
      {showError && <span className={styles.textarea__error}>{errorMessage || error}</span>}
    </div>
  );
};

export default Textarea;
