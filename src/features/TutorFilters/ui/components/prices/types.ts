export type TPrices = {
  title: string;
  sliderValues: number[];
  handleSliderChange: (value: number | number[]) => void;
  errorMessage: string;
  values: Record<string, string[]>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};
