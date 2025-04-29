import { TFeedbackItemProps } from '../../shared/components/FeedbackItem/type';

export type TNewFeedback = {
  onSubmit: (
    feedback: Pick<TFeedbackItemProps, 'rating' | 'content'>
  ) => void; 
};
