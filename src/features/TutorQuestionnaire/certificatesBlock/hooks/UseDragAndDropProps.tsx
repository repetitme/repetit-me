import { useCallback, useRef, useState } from 'react';

import { IDragAndDropProps } from '../type';

export const useDragAndDrop = ({
  onFilesDropped,
  maxFiles,
  currentFileCount
}: IDragAndDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessageDrop, setErrorMessageDrop] = useState<string | null>(null);
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

      setErrorMessageDrop(null);

      if (!e.dataTransfer.files) return;

      const droppedFiles = Array.from(e.dataTransfer.files);

      const validTypeFiles = droppedFiles.filter((file) =>
        ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
      );

      const maxSizeBytes = 10 * 1024 * 1024;
      let sizeFilteredFiles: File[] = [];

      for (const file of validTypeFiles) {
        if (file.size > maxSizeBytes) {
          setErrorMessageDrop(
            `Файл ${file.name} превышает лимит по размеру (10 МБ).`
          );
        } else {
          sizeFilteredFiles.push(file);
        }
      }

      if (currentFileCount + sizeFilteredFiles.length > maxFiles) {
        alert(`Можно загрузить не более ${maxFiles} документов`);
        return;
      }

      onFilesDropped(sizeFilteredFiles);
    },
    [onFilesDropped, maxFiles, currentFileCount]
  );

  return {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    errorMessageDrop
  };
};
