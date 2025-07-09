export type TFeedbackItemProps = {
  id?: string;
  name: string;
  image?: string;
  content: string;
  rating: number;
  date: Date;
};

export type TNewFeedback = Omit<TFeedbackItemProps, 'image'>;
