import { TutorDialogsVariant } from './constants';

export interface TutorDialogsProps {
  variant: TutorDialogsVariant;
  isOpen: boolean;
  close: () => void;
}

export type TState = {
  [key in TutorDialogsVariant]: {
    title: string;
    button: string;
    step?: number;
  };
};

export type formData<T = string> = {
  arrangement: {
    arranged: T;
    cause?: T;
    price?: T;
    date?: T;
    time?: T;
  };
  hadFirstClass: {
    hadClass: T;
    cause?: T;
    futurePlan?: T;
  };
  report: {
    price: T;
    duration: T;
    planedNumberOfLessons: T;
    additionalInfo?: T;
  };
};
