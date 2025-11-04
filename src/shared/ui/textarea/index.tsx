import { useState } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import TextareaProps from './type';

const Textarea = ({
  label,
  error,
  htmlFor,
  className,
  value = '',
  onChange,
  ...props
}: TextareaProps) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsTouched(true);
    onChange?.(e);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const shouldShowError = isTouched && error;
  return (
    <div className={styles.textarea + ' ' + className}>
      {label && (
        <label className={styles.textarea__label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <textarea
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={cn(styles.textarea__area, {
          [styles.error]: shouldShowError
        })}
        {...props}
      />
      {shouldShowError && (
        <span className={styles.textarea__error}>{error}</span>
      )}
    </div>
  );
};

export default Textarea;
