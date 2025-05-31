import Input from '../../../../shared/ui/input';
import { authInputsData, requiredErrorMessage } from './data';

import { TInputFactory, TInputs } from './types';

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

export const AuthInputs: TInputs = {
  name: createInput(...authInputsData.name),
  tg: createInput(...authInputsData.tg),
  link: createInput(...authInputsData.link),
  code: createInput(...authInputsData.code)
};
