import { SetStateAction, useCallback, useEffect, useState } from 'react';

import cn from 'classnames';

import { useDragAndDrop } from '../../../../shared/hooks/useDragAndDrop';
import { useFileRemove } from '../../../../shared/hooks/useFileRemove';
import { useFileUpload } from '../../../../shared/hooks/useFileUpload';
import ButtonRemove from '../../../../shared/ui/buttonRemove';
import Wrapper from '../../../../shared/ui/wrapper';
import { blockContent, requirements } from './data';

import styles from './index.module.scss';

import { DiplomasUploadProps } from './type';

const DiplomasUpload = ({
  onDiplomasChange,
  initialData,
  setDiplomasFiles
}: DiplomasUploadProps) => {
  const [files, setFiles] = useState<File[]>(initialData.map((d) => d.file));
  const MAX_DOCUMENTS = 10;
  const maxSizeBytes = 10 * 1024 * 1024;
  const acceptTypesVideo = ['image/png', 'image/jpg', 'image/jpeg'];

  const { removeFile } = useFileRemove(files, setFiles);

  const handleFilesUpdate = useCallback(
    (newFilesOrUpdater: SetStateAction<File[]>) => {
      setFiles((prevFiles) => {
        const newFiles =
          typeof newFilesOrUpdater === 'function'
            ? newFilesOrUpdater(prevFiles)
            : newFilesOrUpdater;
        return newFiles;
      });
    },
    [onDiplomasChange]
  );

  useEffect(() => {
    setDiplomasFiles(files);

    return () => {
      onDiplomasChange!(
        files.map((file) => ({ file, url: URL.createObjectURL(file) }))
      );
    };
  }, [files]);

  const handleProcessedFiles = useCallback(
    (newFiles: File[]) => {
      handleFilesUpdate((prevFiles) => {
        const combinedFiles = [...prevFiles, ...newFiles];
        return combinedFiles.slice(0, MAX_DOCUMENTS);
      });
    },
    [MAX_DOCUMENTS, handleFilesUpdate]
  );

  const {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    errorMessageDrop
  } = useDragAndDrop({
    onFilesDropped: handleProcessedFiles,
    maxFiles: MAX_DOCUMENTS,
    currentFileCount: files.length,
    acceptTypes: acceptTypesVideo,
    maxSizeBytes: maxSizeBytes
  });

  const { handleFileChange, triggerFileSelect, fileInputRef, errorMessage } =
    useFileUpload({
      files,
      setFiles: handleFilesUpdate,
      maxFiles: MAX_DOCUMENTS,
      acceptTypes: acceptTypesVideo,
      typeConstraints: {
        'image/png': { maxSizeBytes },
        'image/jpg': { maxSizeBytes },
        'image/jpeg': { maxSizeBytes }
      }
    });

  return (
    <Wrapper large className={styles.wrapper}>
      <div className={styles.wrapper__header}>
        <h3 className={styles['wrapper__header-title']}>
          {blockContent.wrapperTitle}
        </h3>
        <p className={styles['wrapper__header-counter']}>
          {`Доступно ${MAX_DOCUMENTS - files.length} из ${MAX_DOCUMENTS}`}
        </p>
      </div>
      <p className={styles.wrapper__description}>
        {blockContent.wrapperDescription}
      </p>
      {files.length > 0 && (
        <div className={styles.wrapper__content}>
          {files.map((file, index) => (
            <div key={index} className={styles['wrapper__content-item']}>
              <img
                src={URL.createObjectURL(file)}
                alt={`Документ ${index + 1}`}
                className={styles['wrapper__content-image']}
              />
              <ButtonRemove removeFile={removeFile} index={index} />
            </div>
          ))}
        </div>
      )}

      {(errorMessage || errorMessageDrop) && (
        <p className={styles['wrapper__content-error']}>
          {errorMessage || errorMessageDrop}
        </p>
      )}

      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        multiple
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {files.length < 10 && (
        <div
          className={cn(
            styles.container,
            isDragging && styles['container--drag']
          )}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isDragging ? (
            <p className={styles['container__dragging-text']}>
              Отпустите файлы для загрузки
            </p>
          ) : (
            <>
              <p className={styles.container__title}>
                <a
                  className={styles['container__title--link']}
                  onClick={triggerFileSelect}
                >
                  Загрузите
                </a>{' '}
                или перетащите документы.
              </p>
              <div className={styles.container__list}>
                <p>{blockContent.containerDescription}</p>
                <ul className={styles['container__list-requirements']}>
                  {requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default DiplomasUpload;
