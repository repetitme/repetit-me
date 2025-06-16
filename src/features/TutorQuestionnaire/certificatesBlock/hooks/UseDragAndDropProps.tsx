import { useCallback, useRef, useState } from 'react';

import { IDragAndDropProps } from '../type';

export const useDragAndDrop = ({
  onFilesDropped,
  maxFiles,
  currentFileCount
}: IDragAndDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current += 1;
    if (dragCounter.current === 1) {
      setIsDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragCounter.current = 0;
      setIsDragging(false);

      if (!e.dataTransfer.files) return;

      const droppedFiles = Array.from(e.dataTransfer.files);

      const validFiles = droppedFiles.filter((file) =>
        ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
      );

      if (currentFileCount + validFiles.length > maxFiles) {
        alert(`Можно загрузить не более ${maxFiles} документов`);
        return;
      }

      onFilesDropped(validFiles);
    },
    [onFilesDropped, maxFiles, currentFileCount]
  );

  return {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop
  };
};
