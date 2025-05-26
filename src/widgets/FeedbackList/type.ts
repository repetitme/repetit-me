import { TFeedbackItemProps } from '../../shared/ui/feedbackItem/type';

export interface IFeedbackListProps {
  updateModalData: (feedbacks: TFeedbackItemProps[]) => void;
}
