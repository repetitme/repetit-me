import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';


type CommonProps = {
  variant?: 'form' | 'auth' | 'price' | 'report';
  type?: 'text' | 'password' | 'email' | 'url' | 'number';
  label?: string;
  name?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
 
  disable?: boolean;
  requiredError?: string;
  placeholder?: string;
  value: string;
  style?: React.CSSProperties;
  extraClass?: string;
 
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};


type InputProps = CommonProps & {
  multiline?: false;
} & InputHTMLAttributes<HTMLInputElement>;


type TextareaProps = CommonProps & {
  multiline: true;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;


export type IInput = InputProps | TextareaProps;
