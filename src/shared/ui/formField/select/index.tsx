import { useCallback, useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <FormField
      label={label}
      htmlFor={htmlFor}
      error={error}
      className={`wrapper ${isOpen ? 'open' : ''}`}
    >
      <select
        className={styles.select}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
