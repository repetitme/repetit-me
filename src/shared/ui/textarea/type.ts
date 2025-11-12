type TextareaProps = {
  label?: string;
  htmlFor?: string;
  className?: string;
  title?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  value?: string;
  onError?: (error: string, name: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minLength?: number;
  maxLength?: number;
};

export default TextareaProps;
