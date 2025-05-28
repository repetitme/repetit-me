import React from 'react';

import Select from 'react-select';

import FormField from '..';

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
  placeholder?: string;
  isSearchable?: boolean;
  defaultValue?: SelectOption;
};

const CustomSelect = ({
  label,
  error,
  htmlFor,
  options,
  value,
  onChange,
  placeholder,
  isSearchable = false,
  defaultValue,
  ...props
}: CustomSelectProps) => {
  // Кастомный индикатор стрелки
  const DropdownIndicator = (props: any) => {
    return (
      <div {...props.innerProps}>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          style={{
            transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s ease'
          }}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="rgba(23, 41, 54, 1)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <FormField label={label} htmlFor={htmlFor} error={error}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isSearchable={isSearchable}
        defaultValue={defaultValue}
        classNamePrefix="custom-select"
        className={styles.reactSelectContainer}
        components={{ DropdownIndicator }}
        styles={{
          control: (base, { menuIsOpen }) => ({
            ...base,
            zIndex: 2, // Селект под меню
            position: 'relative', // Для z-index
            border: '2px solid transparent',
            borderRadius: '12px',
            background: `
              linear-gradient(var(--clr-main), var(--clr-main)) padding-box,
              linear-gradient(180deg, var(--clr-primary-input) 0%, var(--clr-primary-default) 100%) border-box
            `,
            padding: '12px 16px',
            boxShadow: 'none',
            minHeight: 'auto',
            '&:hover': {
              borderColor: menuIsOpen ? 'var(--clr-blue)' : 'transparent'
            }
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '12px',
            boxShadow:
              '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1)',
            width: 'calc(100% - 12px)',
            left: '6px',
            marginTop: '-12px', // Поднимаем меню вверх на 12px
            zIndex: 1, // Чтобы меню было над селектом
            position: 'relative' // Для корректного позиционирования
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: '200px',
            overflow: 'auto',
            padding: '16px 0 4px 0',
            borderRadius: '12px'
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            padding: '12px 16px',
            backgroundColor: isSelected
              ? 'rgba(0, 0, 0, 0.05)'
              : isFocused
                ? 'rgba(0, 0, 0, 0.03)'
                : 'white',
            color: 'var(--clr-black)',
            '&:active': {
              backgroundColor: 'rgba(0, 0, 0, 0.05)'
            }
          }),
          singleValue: (base) => ({
            ...base,
            color: 'var(--clr-black)'
          }),
          placeholder: (base) => ({
            ...base,
            color: 'var(--clr-black)'
          }),
          valueContainer: (base) => ({
            ...base,
            padding: 0
          }),
          indicatorsContainer: (base) => ({
            ...base,
            padding: 0
          })
        }}
        {...props}
      />
    </FormField>
  );
};

export default CustomSelect;
