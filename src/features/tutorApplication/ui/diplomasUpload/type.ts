export interface Diploma {
  file: File;
  url: string;
}

export interface DiplomasUploadProps {
  onDiplomasChange?: (diplomas: Diploma[]) => void;
}
