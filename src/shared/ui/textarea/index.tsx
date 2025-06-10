

import classNames from 'classnames'
import styles from './index.module.scss';

type TextareaProps = {
  label?: string;
  error?: string;
  htmlFor?: string;
  classname?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  label,
  error,
  htmlFor,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className={styles.textarea}>
      {label && (
        <label className={styles.textarea__label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <textarea
         className={classNames(styles.textarea__area, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.textarea__error}>{error}</span>}
    </div>
  );
};

export default Textarea;
