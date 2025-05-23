import FormField from '../index.tsx';

import styles from './index.module.scss';

type InputFieldProps = Omit<
  React.ComponentProps<typeof FormField>,
  'children'
> &
  React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, error, htmlFor, ...props }: InputFieldProps) => (
  <FormField label={label} htmlFor={htmlFor} error={error}>
    <input className={styles.input} {...props} />
  </FormField>
);

export default InputField;
