type TextareaForAddInfoProps = {
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minLength?: number;
  maxLength?: number;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className' | 'value' | 'onChange' | 'minLength' | 'maxLength'
>;

export default TextareaForAddInfoProps;
