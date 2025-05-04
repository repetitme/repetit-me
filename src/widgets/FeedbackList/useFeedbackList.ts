import { useEffect, useMemo, useState } from 'react';

import { TFeedbackItemProps } from '../../shared/ui/feedbackItem/type';

interface UseFeedbackListProps {
  initialData: TFeedbackItemProps[];
  onDataChange: (feedbacks: TFeedbackItemProps[]) => void;
}

const useFeedbackList = ({
  initialData,
  onDataChange
}: UseFeedbackListProps) => {
  const [feedbacks, setFeedbacks] = useState<TFeedbackItemProps[]>(initialData);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  useEffect(() => {
    onDataChange(feedbacks);
  }, [feedbacks, onDataChange]);

  const sortedFeedbacks = useMemo(() => {
    return [...feedbacks].sort((a, b) => {
      return isAscending
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    });
  }, [feedbacks, isAscending]);

  const toggleSort = () => setIsAscending((prev) => !prev);

  return {
    sortedFeedbacks,
    setFeedbacks,
    isAscending,
    toggleSort
  };
};

export default useFeedbackList;
