export interface TNewFeedback {
  rating: number;
  content: string;
}

// Пропсы компонента NewFeedbackForm
export interface NewFeedbackFormProps {
  onSubmit: (feedback: TNewFeedback) => void;
}
