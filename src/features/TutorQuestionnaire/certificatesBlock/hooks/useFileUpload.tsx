import { useRef, useState } from 'react';

import { IFileUploadProps, IFileUploadReturn } from '../type';

export const useFileUpload = ({
  maxFiles,
  acceptTypes
}: IFileUploadProps): IFileUploadReturn => {
  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    const validFiles = selectedFiles.filter((file) =>
      acceptTypes.includes(file.type)
    );

    if (files.length + validFiles.length > 10) {
      setErrorMessage(`Можно загрузить не более ${maxFiles} документов`);
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
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
