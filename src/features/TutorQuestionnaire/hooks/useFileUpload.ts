import { useRef, useState } from 'react';

import { IFileUploadProps, IFileUploadReturn } from '../type';

export const useFileUpload = ({
  maxFiles,
  acceptTypes,
  typeConstraints = {}
}: IFileUploadProps): IFileUploadReturn => {
  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    const validTypeFiles = selectedFiles.filter((file) =>
      acceptTypes.includes(file.type)
    );

    for (const file of validTypeFiles) {
      const constraint = typeConstraints[file.type];
      const maxSizeBytes = constraint?.maxSizeBytes ?? Infinity;

      if (file.size > maxSizeBytes) {
        setErrorMessage(
          `Файл ${file.name} превышает лимит по размеру (${maxSizeBytes / (1024 * 1024)} МБ).`
        );
        return;
      }
    }

    if (files.length + validTypeFiles.length > maxFiles) {
      setErrorMessage(`Можно загрузить не более ${maxFiles} файлов`);
      return;
    }

    setFiles((prev) => [...prev, ...validTypeFiles]);
    setErrorMessage(null);
    e.target.value = '';
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    files,
    handleFileChange,
    triggerFileSelect,
    fileInputRef,
    errorMessage
  };
};
