import { useRef, useState } from 'react';

export interface IFileUploadProps {
  maxFiles: number;
  acceptTypes: string[];
}

export interface IFileUploadReturn {
  files: File[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  triggerFileSelect: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  errorMessage: string | null;
}

const useFileUpload = ({
  maxFiles,
  acceptTypes
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

    const maxSizeBytes = 10 * 1024 * 1024;

    const oversizedFiles = validTypeFiles.filter(
      (file) => file.size > maxSizeBytes
    );

    if (oversizedFiles.length > 0) {
      const fileNames = oversizedFiles.map((f) => f.name).join(', ');
      setErrorMessage(`Файлы ${fileNames} превышают лимит по размеру (10 МБ).`);
      return;
    }

    const validSizeFiles = validTypeFiles.filter(
      (file) => file.size <= maxSizeBytes
    );

    if (files.length + validSizeFiles.length > maxFiles) {
      setErrorMessage(`Можно загрузить не более ${maxFiles} документов`);
      return;
    }

    setFiles((prev) => [...prev, ...validSizeFiles]);
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

export default useFileUpload;
