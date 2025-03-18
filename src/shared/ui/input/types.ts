export default interface TInput {
  inputType?: 'Auth';
  type?: 'text' | 'password' | 'email' | 'url' | 'number';
  label?: string;
  name: string;
  pattern?: string;
  title?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  extraClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
