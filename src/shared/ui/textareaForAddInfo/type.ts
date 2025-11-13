type TextareaForAddInfoProps = {
  title?: string;
  value?: string;
  pattern?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minLength?: number;
  maxLength?: number;
}

export default TextareaForAddInfoProps;
