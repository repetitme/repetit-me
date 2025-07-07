import { useEffect, useRef, useState } from 'react';

interface UseExpandableHeightProps {
  initialCount: number;
  totalCount: number;
}

export const useExpandableHeight = ({
  initialCount,
  totalCount
}: UseExpandableHeightProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [height, setHeight] = useState<number | 'auto'>(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (isExpanded) {
        setHeight('auto');
      } else {
        setHeight(containerRef.current.scrollHeight);
      }
    }
  }, [visibleCount, isExpanded]);

  const showMore = () => {
    const newCount = Math.min(totalCount, visibleCount + 5);
    setVisibleCount(newCount);
    if (newCount >= totalCount) {
      setIsExpanded(true);
    }
  };

  return {
    containerRef,
    height,
    showMore,
    isExpanded,
    setIsExpanded,
    visibleCount
  };
};
