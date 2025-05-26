import Input from '../../../shared/ui/input';
import inputData from './data';

import { TAuthInputInterface, TInputFactory, TInputs } from './types';

const requiredErrorMessage: Partial<
  Record<TAuthInputInterface['name'], string>
> = {
  name: 'Пожалуйста, укажите имя',
  tg: 'Пожалуйста, укажите никнейм',
  code: 'Пожалуйста, введите шестизначный код'
};

const createInput: TInputFactory =
  (name, placeholder, label, title, pattern) =>
  ({ values, handleChange }, notRequired) => (
    <Input
      variant="auth"
      requiredError={requiredErrorMessage[name]}
      required={notRequired || name === 'link' ? false : true}
      name={name}
      value={values[name]}
      onChange={handleChange}
      autoComplete={name === 'code' ? 'off' : 'on'}
      minLength={3}
      maxLength={100}
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
