import styles from './index.module.scss';

export interface FormFieldProps {
  label?: string;
  error?: string | boolean | React.ReactNode;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({
  children,
  label,
  htmlFor,
  error
}: FormFieldProps) => {
  return (
    <div className={styles.form}>
      {label && (
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span id={`${htmlFor}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;
