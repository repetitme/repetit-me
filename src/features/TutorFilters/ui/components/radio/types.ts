export type TRadio = {
  title: string;
  items: string[];
  values: Record<string, string[]>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
