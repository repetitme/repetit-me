import FormField from '../index.tsx';

import styles from './index.module.scss';

type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = Omit<React.ComponentProps<typeof FormField>, 'children'> &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    placeholder?: string;
  };

const Select = ({
  label,
  error,
  htmlFor,
  options = [],
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <FormField label={label} htmlFor={htmlFor} error={error}>
      <select className={styles.select} {...props}>
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
