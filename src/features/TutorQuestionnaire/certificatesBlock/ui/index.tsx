import React from 'react';

import cn from 'classnames';

import Wrapper from '../../../../shared/ui/wrapper';
import { useDragAndDrop } from '../hooks/UseDragAndDropProps';
import { useFileUpload } from '../hooks/useFileUpload';
import { blockContent, requirements } from './data';

import styles from './index.module.scss';

const MAX_DOCUMENTS = 10;

const CertificatesBlock: React.FC = () => {
  const {
    files: documents,
    handleFileChange,
    triggerFileSelect,
    fileInputRef,
    errorMessage
  } = useFileUpload({
    maxFiles: MAX_DOCUMENTS,
    acceptTypes: ['image/png', 'image/jpg', 'image/jpeg']
  });

  const currentFileCount = documents.length;

  const {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    errorMessageDrop
  } = useDragAndDrop({
    onFilesDropped: (droppedFiles) => {
      // Создаем Fake событие для handleFileChange
      const fileList = createFileList(droppedFiles);
      const fakeEvent = {
        target: { files: fileList }
      } as React.ChangeEvent<HTMLInputElement>;
      handleFileChange(fakeEvent);
    },
    maxFiles: MAX_DOCUMENTS,
    currentFileCount
  });

  function createFileList(files: File[]): FileList {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    return dataTransfer.files;
  }

  return (
    <Wrapper large className={styles.wrapper}>
      <div className={styles.wrapper__header}>
        <h3 className={styles['wrapper__header-title']}>
          {blockContent.wrapperTitle}
        </h3>
        <p className={styles['wrapper__header-counter']}>
          {`Доступно ${MAX_DOCUMENTS - documents.length} из ${MAX_DOCUMENTS}`}
        </p>
      </div>
      <p className={styles.wrapper__description}>
        {blockContent.wrapperDescription}
      </p>
      {documents.length > 0 && (
        <div className={styles.wrapper__content}>
          {documents.map((file, index) => (
            <div key={index} className={styles['wrapper__content-item']}>
              <img
                src={URL.createObjectURL(file)}
                alt={`Документ ${index + 1}`}
                className={styles['wrapper__content-image']}
              />
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

      {documents.length < 10 && (
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

export default CertificatesBlock;
