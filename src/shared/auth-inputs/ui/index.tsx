import React from 'react';
import './input.scss';
interface TInputInterface extends React.HTMLProps<HTMLInputElement> {
  value: string;
  name: 'name' | 'tg' | 'link' | 'code';
  required?: boolean;
  placeholder?: string;
  extraClass?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<TInputInterface> = ({
  value,
  name,
  required,
  placeholder,
  extraClass,
  onChange
}) => {
  const inputType = (name: string) => {
    if (name === 'link') {
      return 'url';
    }
    if (name === 'code') {
      return 'number';
    }
    return 'text';
  };
  return (
    <>
      <p>{name}</p>
      <input
        className={`input ${extraClass}`}
        required={required}
        name={name}
        type={inputType(name)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
