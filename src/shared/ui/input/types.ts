export default interface IInput {
  variant?: 'default' | 'auth' | 'price' | 'report';
  type?: 'text' | 'password' | 'email' | 'url' | 'number';
  label?: string;
  name?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: 'on' | 'off';
  disable?: boolean;
  requiredError?: string;
  placeholder?: string;
  value: string;
  style?: React.CSSProperties;
  extraClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
