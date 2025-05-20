import FormField from '../index.tsx';

import styles from './index.module.scss';

export type InputFieldProps = {
  id: string;
  type: string;
  label?: string;
  error?: string;
  description?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  error,
  description,
  ...props
}) => {
  return (
    <FormField
      label={label}
      htmlFor={id}
      error={error}
      description={description}
    >
      <input
        id={id}
        type={type}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...props}
      />
    </FormField>
  );
};

export default InputField;
