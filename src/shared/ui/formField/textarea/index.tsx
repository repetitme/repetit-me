import FormField from '../index.tsx';

import styles from './index.module.scss';

export type TextareaProps = {
  id: string;
  label?: string;
  error?: string;
  description?: string;
  rows: number;
};

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  error,
  description,
  rows = 4,
  ...props
}) => {
  return (
    <FormField
      label={label}
      htmlFor={id}
      error={error}
      description={description}
    >
      <textarea
        id={id}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
        {...props}
      />
    </FormField>
  );
};

export default Textarea;
