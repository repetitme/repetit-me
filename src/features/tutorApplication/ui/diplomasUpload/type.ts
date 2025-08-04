export interface Diploma {
  file: File;
  url: string;
}

export interface DiplomasUploadProps {
  onDiplomasChange?: (diplomas: Diploma[]) => void;
  initialData: Diploma[];
  setDiplomasFiles: React.Dispatch<React.SetStateAction<File[]>>;
}
