import styles from './index.module.scss';
import TInput from './types';
import { useState } from 'react';
import classNames from 'classnames';

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
  style,
  onChange
}) => {
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    let error = '';
    if (e.target.validity.valueMissing && required) {
      error = requiredError || 'Поле обязательно для заполнения';
    } else if (e.target.validity.typeMismatch) {
      error = title || e.target.validationMessage;
    } else if (e.target.validity.patternMismatch) {
      error = title || e.target.validationMessage;
    }
    setError(error);
  };

  return (
    <div
      className={classNames(styles['input-wrapper'], extraClass, {
        [styles.primary]: inputType !== 'Auth'
      })}
      style={style}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={classNames(styles.input, { [styles.error]: error })}
        required={required}
        autoComplete={name === 'code' ? 'off' : 'on'}
        name={name}
        pattern={type ? undefined : pattern}
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
