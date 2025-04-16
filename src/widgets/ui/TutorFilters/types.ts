export type TButton = {
  className?: string;
  reset?: boolean;
  onClick?: () => void;
};

export type TState = {
  [key: string]: string[];
};
