

export interface ProfileCategoriesProps {
  category: {
    ageCategory: string;
    price: string;
  };
  data: {
    value: string;
    label: string;
  }[];
  isLast?: boolean;
  onAddCategory?: () => void;
  className?: string;
}
