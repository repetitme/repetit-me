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
  };

const Select = ({
  label,
  error,
  htmlFor,
  options = [],
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
    <FormField label={label} htmlFor={htmlFor} error={error}>
      <select
        className={`${styles.select} ${isOpen ? styles.open : styles.select}}`}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div className={styles.options}>
           {options.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
        </div>
       
      </select>
    </FormField>
  );
};

export default Select;
