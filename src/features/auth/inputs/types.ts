export interface TInputInterface extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  name: 'name' | 'tg' | 'link' | 'code';
  required?: boolean;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export type TInputFactory = (
  name: TInputInterface['name'],
  required: boolean,
  placeholder: string,
  label: string
) => (props: {
  values: { value: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}, notRequired?: string) => React.ReactElement;

export type TInputs = Record<
TInputInterface['name'],
ReturnType<TInputFactory>
>;