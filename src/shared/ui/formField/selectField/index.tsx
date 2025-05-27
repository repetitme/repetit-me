import React from 'react';

import Select from 'react-select';

import FormField from '../index.tsx';

import styles from './index.module.scss';

type SelectOption = {
  value: string | number;
  label: string;
};

type CustomSelectProps = Omit<
  React.ComponentProps<typeof FormField>,
  'children'
> & {
  options: SelectOption[];
  value?: SelectOption | null;
  onChange?: (option: SelectOption | null) => void;

  isSearchable?: boolean;
};

const CustomSelect = ({
  label,
  error,
  htmlFor,
  options,
  value,
  onChange,
  isSearchable = false,
  ...props
}: CustomSelectProps) => {
  return (
    <FormField label={label} htmlFor={htmlFor} error={error}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
   
        isSearchable={isSearchable}
        classNamePrefix="custom-select"
        className={styles.reactSelectContainer}
        styles={{
          control: (base) => ({
            ...base,
            border: '2px solid transparent',
            borderRadius: '12px',
            background: `
              linear-gradient(var(--clr-main), var(--clr-main)) padding-box,
              linear-gradient(180deg, var(--clr-primary-input) 0%, var(--clr-primary-default) 100%) border-box
            `,
            padding: '8px 16px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: 'var(--clr-blue)'
            }
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '12px',
            marginTop: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }),
          option: (base, { isSelected }) => ({
            ...base,
            padding: '8px 16px',
            backgroundColor: isSelected ? 'var(--clr-primary-light)' : 'white',
            color: isSelected ? 'var(--clr-primary-dark)' : 'var(--clr-text)',
            '&:hover': {
              backgroundColor: 'var(--clr-primary-light)'
            }
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: '0 8px',
            color: 'var(--clr-text)'
          }),
          indicatorSeparator: () => ({
            display: 'none'
          })
        }}
        {...props}
      />
    </FormField>
  );
};

export default CustomSelect;
