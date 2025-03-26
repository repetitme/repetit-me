import styles from './index.module.scss';
import IInput from './types';
import { useState } from 'react';
import cn from 'classnames';

const Input: React.FC<IInput> = ({
  variant = 'default',
  type,
  label,
  value,
  name,
  required,
  pattern,
  title,
  requiredError = 'Поле обязательно для заполнения',
  placeholder,
  extraClass,
  style,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    validateInput(e);
  };

  return (
    <div
      className={cn(styles['input-wrapper'], extraClass, {
        [styles.primary]: variant !== 'auth'
      })}
      style={style}
    >
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
        value={value}
        onChange={handleChange}
      />
      {error && <span className={styles.error__text}>{error}</span>}
    </div>
  );
};

export default Input;
