import { useCallback, useRef, useState } from 'react';

export interface IDragAndDropProps {
  onFilesDropped: (files: File[]) => void;
  maxFiles: number;
  currentFileCount: number;
  acceptTypes?: string[];
  maxSizeBytes?: number;
}

export const useDragAndDrop = ({
  onFilesDropped,
  maxFiles,
  currentFileCount,
  acceptTypes = [],
  maxSizeBytes
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

      if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) return;

      const droppedFiles = Array.from(e.dataTransfer.files);

      let filteredByType: File[] = [];
      if (acceptTypes.length > 0) {
        filteredByType = droppedFiles.filter((file) =>
          acceptTypes.includes(file.type)
        );

        if (filteredByType.length !== droppedFiles.length) {
          setErrorMessageDrop('Файл имеет неподдерживаемый формат.');
        }
      } else {
        filteredByType = droppedFiles;
      }

      const validFiles: File[] = [];
      for (const file of filteredByType) {
        if (maxSizeBytes && file.size > maxSizeBytes) {
          setErrorMessageDrop(
            `Файл ${file.name} превышает лимит по размеру (${(maxSizeBytes / (1024 * 1024)).toFixed(2)} МБ).`
          );
        } else {
          validFiles.push(file);
        }
      }

      if (currentFileCount + validFiles.length > maxFiles) {
        alert(`Можно загрузить не более ${maxFiles} документов`);
        return;
      }

      onFilesDropped(validFiles);
    },
    [onFilesDropped, maxFiles, currentFileCount, acceptTypes, maxSizeBytes]
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
