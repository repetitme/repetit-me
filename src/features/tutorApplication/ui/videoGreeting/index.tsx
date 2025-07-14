import { useEffect, useState } from 'react';

import cn from 'classnames';

import { useDragAndDrop } from '../../../../shared/hooks/useDragAndDrop';
import { useFileUpload } from '../../../../shared/hooks/useFileUpload';
import Wrapper from '../../../../shared/ui/wrapper';
import { adviсes, blockContent, requirements } from './data';

import styles from './index.module.scss';

import { VideoGreetingProps } from './type';

const VideoGreeting = ({ onVideoChange, initialVideo }: VideoGreetingProps) => {
  const maxSizeBytes = 20 * 1024 * 1024;
  const acceptTypesVideo = ['video/mp4', 'video/quicktime', 'video/3gpp'];
  const [files, setFiles] = useState<File[]>([]);

  const handleProcessedFiles = (processedFiles: File[]) => {
    setFiles(processedFiles);
  };

  const {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    errorMessageDrop
  } = useDragAndDrop({
    onFilesDropped: handleProcessedFiles,
    maxFiles: 1,
    currentFileCount: files.length,
    acceptTypes: acceptTypesVideo,
    maxSizeBytes: maxSizeBytes
  });

  const { handleFileChange, triggerFileSelect, fileInputRef, errorMessage } =
    useFileUpload({
      files,
      setFiles,
      maxFiles: 1,
      acceptTypes: acceptTypesVideo,
      typeConstraints: {
        'video/mp4': { maxSizeBytes },
        'video/quicktime': { maxSizeBytes },
        'video/3gpp': { maxSizeBytes }
      }
    });

  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(
    initialVideo?.url || null
  );

  useEffect(() => {
  if (files.length > 0) {
    const videoData = {
      file: files[0],
      url: URL.createObjectURL(files[0])
    };
    setVideoPreviewUrl(videoData.url);
    onVideoChange(videoData);
  } else {
    setVideoPreviewUrl(null);
    onVideoChange(null);
  }
}, [files, onVideoChange]);

  return (
    <Wrapper large className={styles.wrapper}>
      <h3 className={styles['wrapper__title']}>{blockContent.wrapperTitle}</h3>
      <p className={styles['wrapper__description']}>
        {blockContent.wrapperDescription}
      </p>
      {files.length === 0 ? (
        <div
          className={cn(
            styles.container_drop,
            isDragging && styles['container_drop--drag']
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
              <p className={styles.container_drop__title}>
                <a
                  className={styles['container_drop__title--link']}
                  onClick={triggerFileSelect}
                >
                  Загрузите
                </a>{' '}
                или перетащите видео.
              </p>
              <div className={styles.container_drop__requirements}>
                <p>{blockContent.containerDescription}</p>
                <ul className={styles['container_drop__requirements-list']}>
                  {requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <input
            type="file"
            accept={acceptTypesVideo.join(',')}
            multiple={false}
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className={styles['container_video']}>
          {videoPreviewUrl && <video src={videoPreviewUrl} controls />}
        </div>
      )}

      <div className={styles.container_advices}>
        <h4 className={styles['container_advices__title']}>
          {blockContent.containerAdviсes}
        </h4>
        <ul className={styles['container_advices__list']}>
          {adviсes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {(errorMessage || errorMessageDrop) && (
        <div className={styles.errorMessage} style={{ color: 'red' }}>
          {errorMessage || errorMessageDrop}
        </div>
      )}
    </Wrapper>
  );
};

export default VideoGreeting;
