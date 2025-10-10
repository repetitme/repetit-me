
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
  return (
    <div className={styles.textarea + ' ' + className}>
      {label && (
        <label className={styles.textarea__label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <textarea
        onChange={onChange}
        value={value}
        className={cn(styles.textarea__area, { [styles.error]: error })}
        {...props}
      />
      {error && (
        <span className={styles.textarea__error}>{error}</span>
      )}
    </div>
  );
};

export default Textarea;