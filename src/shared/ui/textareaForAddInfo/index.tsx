import cn from 'classnames';

import styles from './index.module.scss';

import TextareaProps from './type';

const TextareaForAddInfo = ({
  value = '',
  onChange,
  title,
  minLength,
  placeholder,
  maxLength,
  pattern,
  ...props
}: TextareaProps) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cn(styles.textarea__area, { [styles.error]: title })}
        {...props}
      />
      <span
        className={cn(styles.textarea__error, {
          [styles.active]: title
        })}
      >
        {title}
      </span>
    </>
  );
};

export default TextareaForAddInfo;
