import { useEffect, useMemo, useState } from 'react';

import { TFeedbackItemProps } from '../../shared/components/FeedbackItem/type';

interface UseFeedbackListProps {
  initialData: TFeedbackItemProps[];
  onDataChange: (raitings: number[]) => void;
}

const useFeedbackList = ({
  initialData,
  onDataChange
}: UseFeedbackListProps) => {
  const [feedbacks, setFeedbacks] = useState<TFeedbackItemProps[]>(initialData);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  useEffect(() => {
    const raitings = feedbacks.map(item => item.rating)
    onDataChange(raitings);
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
