import { TFeedbackItemProps } from '../../shared/components/FeedbackItem/type';

export interface IFeedbackListProps {
  updateModalData: (feedbacks: TFeedbackItemProps[]) => void;
}
