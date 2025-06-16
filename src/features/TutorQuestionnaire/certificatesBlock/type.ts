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

export interface IDragAndDropProps {
  onFilesDropped: (files: File[]) => void;
  maxFiles: number;
  currentFileCount: number;
}
