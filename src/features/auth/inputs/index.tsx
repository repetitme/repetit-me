import React from 'react';
import { TAuthInputInterface, TInputFactory, TInputs } from './types';
import Input from '../../../shared/ui/input';
import inputData from './data';

const AuthInput: React.FC<TAuthInputInterface> = ({
  label,
  value,
  name,
  required,
  title,
  pattern,
  placeholder,
  onChange
}) => {
  return (
    <Input
      inputType="Auth"
      label={label}
      value={value}
      name={name}
      required={required}
      placeholder={placeholder}
      requiredError={requiredErrorMessage(name)}
      title={title}
      pattern={pattern}
      onChange={onChange}
    />
  );
};

const requiredErrorMessage = (error: string) => {
  switch (error) {
    case 'name':
      return 'Пожалуйста, укажите имя';
    case 'tg':
      return 'Пожалуйста, укажите никнейм';
    case 'code':
      return 'Пожалуйста, введите шестизначный код';
  }
  return '';
};

const createInput: TInputFactory =
  (name, placeholder, label, title, pattern) =>
  ({ values, handleChange }, notRequired) => (
    <AuthInput
      required={notRequired || name === 'link' ? false : true}
      name={name}
      value={values[name]}
      onChange={handleChange}
      label={label}
      placeholder={placeholder}
      title={title}
      pattern={pattern}
    />
  );

const AuthInputs: TInputs = {
  name: createInput(...inputData.name),
  tg: createInput(...inputData.tg),
  link: createInput(...inputData.link),
  code: createInput(...inputData.code)
};

export default AuthInputs;
