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

export interface IDragAndDropProps {
  onFilesDropped: (files: File[]) => void;
  maxFiles: number;
  currentFileCount: number;
  acceptTypes?: string[];
  maxSizeBytes?: number;
}
