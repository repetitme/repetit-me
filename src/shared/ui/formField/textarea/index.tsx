import FormField from '../index.tsx';

import styles from './index.module.scss';

type TextareaProps = Omit<React.ComponentProps<typeof FormField>, 'children'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ label, error, htmlFor, ...props }: TextareaProps) => {
  return (
    <FormField label={label} htmlFor={htmlFor} error={error}>
      <textarea className={styles.textarea} {...props} />
    </FormField>
  );
};

export default Textarea;
