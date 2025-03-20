export interface TAuthInputInterface extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  name: 'name' | 'tg' | 'link' | 'code';
  title?: string;
  pattern?: string;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export type TInputData = Record<
  string,
  [
    name: TAuthInputInterface['name'],
    placeholder: string,
    label: string,
    title: string,
    pattern: string
  ]
>;

export type TInputFactory = (
  ...args: TInputData[keyof TInputData]
) => (
  props: {
    values: Record<TAuthInputInterface['name'], string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  notRequired?: string
) => React.ReactElement;

export type TInputs = Record<
  TAuthInputInterface['name'],
  ReturnType<TInputFactory>
>;
