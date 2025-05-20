import FormField from '../index.tsx';

import styles from './index.module.scss';

export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  label?: string;
  error?: string;
  description?: string;
  options: SelectOption[];
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options = [],
  error,
  description,
  placeholder,
  ...props
}) => {
  return (
    <FormField
      label={label}
      htmlFor={id}
      error={error}
      description={description}
    >
      <select
        id={id}
        className={`${styles.select} ${error ? styles.error : ''}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

export default Select;
