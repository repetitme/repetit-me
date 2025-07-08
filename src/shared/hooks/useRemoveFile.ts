import { Dispatch, SetStateAction } from 'react';

type TUseRemoveFile = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  removeFile: (fileOrIndex: File | number) => void;
};

export const useRemoveFile = (
  files: File[],
  setFiles: Dispatch<SetStateAction<File[]>>
): TUseRemoveFile => {
  const removeFile = (fileOrIndex: File | number) => {
    setFiles((prevFiles) => {
      if (typeof fileOrIndex === 'number') {
        return prevFiles.filter((_, index) => index !== fileOrIndex);
      } else {
        return prevFiles.filter((file) => file !== fileOrIndex);
      }
    });
  };

  return { files, removeFile, setFiles };
};
