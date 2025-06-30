type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption | null;
  label?: string;
  htmlFor?: string;
  placeholder?: string;
  isSearchable?: boolean;
  defaultValue?: SelectOption;
  onChange?: (option: SelectOption | null) => void;
};

export default SelectProps;
