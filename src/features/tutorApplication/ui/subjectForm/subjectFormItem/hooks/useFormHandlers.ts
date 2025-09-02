import * as data from '../data';

import { Subject } from '../../type';

interface IUseFormHandlers {
  values: Subject;
  setValues: (newValues: Subject) => void;
  onChange?: (subject: Subject) => void;
}

const useFormHandlers = ({ values, setValues, onChange }: IUseFormHandlers) => {
  const handleCategoryChange =
    (categoryIndex: number) =>
    (updatedCategory: { ageCategory: string; price: string }) => {
      const updatedCategories = [...values.categories];
      updatedCategories[categoryIndex] = updatedCategory;

      const newValues = { ...values, categories: updatedCategories };
      setValues(newValues);
      onChange?.(newValues);
    };

  const handleSelectChange = (fieldName: string) => (selectedOption: any) => {
    const newValues = { ...values, [fieldName]: selectedOption };
    setValues(newValues);
    onChange?.(newValues);
  };

  const handleAddCategory = () => {
    const newCategory = {
      ageCategory: data.ageCategories[0].label,
      price: ''
    };
    const newValues = {
      ...values,
      categories: [...values.categories, newCategory]
    };
    setValues(newValues);
    onChange?.(newValues);
  };

  return {
    handleCategoryChange,
    handleSelectChange,
    handleAddCategory
  };
};

export default useFormHandlers;
