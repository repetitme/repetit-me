import React from 'react';
import './inputs.scss';
import { TInputInterface, TInputFactory, TInputs } from './types';

const Input: React.FC<TInputInterface> = ({
  label,
  value,
  name,
  required,
  placeholder,
  onChange
}) => {
  return (
    <div className={'input-wrapper'}>
      <label>{label}</label>
      <input
        className={'input'}
        required={required}
        name={name}
        type={name === 'link' ? 'url' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const createInput: TInputFactory =
  (name, required, placeholder, label) =>
  ({ values, handleChange }, notRequired) => (
    <Input
      required={notRequired ? false : required}
      name={name}
      value={values.value}
      onChange={handleChange}
      label={label}
      placeholder={placeholder}
    />
  );

const Inputs: TInputs = {
  name: createInput('name', true, 'Введите имя', 'Имя'),
  tg: createInput('tg', true, '@aleksandr', 'Никнейм в Telegram'),
  link: createInput(
    'link',
    false,
    'https://...',
    'Реферальная ссылка (при наличии)'
  ),
  code: createInput('code', true, 'Введите шестизначное число', 'Код')
};

export default Inputs;
