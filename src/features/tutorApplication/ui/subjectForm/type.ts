export interface Subject {
  discipline: string;
  status: string; 
  target: string;
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
}

export interface SubjectFormProps {
  onChange: (subjects: Subject[]) => void;
}