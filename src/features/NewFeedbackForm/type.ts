export interface TNewFeedback {
  rating: number;
  content: string;
}

export interface NewFeedbackFormProps {
  toggleVisible: () => void;
}
