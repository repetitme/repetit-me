import { useRef, useState } from 'react';

export interface ITypeConstraint {
  maxSizeBytes?: number;
}

export interface IFileUploadProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  maxFiles: number;
  acceptTypes: string[];
  typeConstraints?: Record<string, ITypeConstraint>;
}

export const useFileUpload = ({
  files,
  setFiles,
  maxFiles,
  acceptTypes,
  typeConstraints = {}
}: IFileUploadProps): {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  triggerFileSelect: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  errorMessage: string | null;
} => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    const validTypeFiles = selectedFiles.filter((file) =>
      acceptTypes.includes(file.type)
    );

    if (validTypeFiles.length === 0) {
      setErrorMessage('Неподдерживаемый тип файла');

      return;
    }

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
      if (validTypeFiles.length <= maxFiles) {
        setFiles([...validTypeFiles]);
      } else {
        setErrorMessage(
          maxFiles === 1
            ? `Можно загрузить не более 1 файла`
            : `Можно загрузить не более ${maxFiles} файлов`
        );
      }
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
    handleFileChange,
    triggerFileSelect,
    fileInputRef,
    errorMessage
  };
};
