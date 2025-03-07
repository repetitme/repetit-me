import React from 'react';
import './input.scss';
interface TInputInterface extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  name: 'name' | 'tg' | 'link' | 'code';
  required?: boolean;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<TInputInterface> = ({
  label,
  value,
  name,
  required,
  placeholder,
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
    <div className={'input-wrapper'}>
      <label>{label}</label>
      <input
        className={'input'}
        required={required}
        name={name}
        type={inputType(name)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const createInput =
  (
    name: TInputInterface['name'],
    required: boolean,
    placeholder: string,
    label: string
  ) =>
  (
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    notRequired?: string
  ) => (
    <Input
      required={notRequired ? false : required}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
    />
  );

const Inputs = {
  name: createInput('name', true, 'Введите имя', 'Имя'),
  tg: createInput('tg', true, '@aleksandr', 'Никнейм в Telegram'),
  link: createInput('link', false, 'https://...', 'Реферальная ссылка (при наличии)'),
  code: createInput('code', true, 'Введите шестизначное число', 'Код')
};

export default Inputs;
