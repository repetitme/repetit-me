export interface Diploma {
  file: File;
  url: string; // Object URL для предпросмотра
}

export interface DiplomasUploadProps {
  onDiplomasChange?: (diplomas: Diploma[]) => void;
}
