import styles from './index.module.scss';

import TextareaProps from './type';

const TextareaForAddInfo = ({
  value = '',
  onChange,
  error,
  ...props
}: TextareaProps) => {
  return (
    <>
      <textarea
        onChange={onChange}
        value={value}
        className={styles.textarea__area}
        {...props}
      />
    </>
  );
};

export default TextareaForAddInfo;
