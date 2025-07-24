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
  onChange?: (updatedCategory: { ageCategory: string; price: string }) => void;
  className?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface Subject {
  discipline: { value: string; label: string };
  status: { value: string; label: string };
  target: { value: string; label: string };
  experience: string;
  isActive: boolean;
  categories: {
    ageCategory: string;
    price: string;
  }[];
}

export interface SubjectFormItemProps {
  index: number;
  onChange?: (subject: Subject) => void;
  initialData?: Subject;
}

export interface SubjectFormProps {
  onChange: (subjects: Subject[]) => void;
  initialData: Subject[];
}

export const initialSubject = (): Subject => ({
  discipline: { value: '', label: 'Математика' },
  status: { value: '', label: 'Частный преподаватель' },
  target: { value: '', label: 'Повышение успеваемости' },
  experience: '3 года',
  isActive: true,
  categories: [{ ageCategory: '', price: '2500' }]
});
