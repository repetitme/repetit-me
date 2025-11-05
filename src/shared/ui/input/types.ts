export default interface IInput {
  variant?: 'form' | 'auth' | 'price' | 'report';
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
  onError?: (error: string, name: string) => void;
  onlyNumber?: boolean;
}
