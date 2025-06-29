type TextareaProps = {
  label?: string;
  error?: string;
  htmlFor?: string;
  classname?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default TextareaProps