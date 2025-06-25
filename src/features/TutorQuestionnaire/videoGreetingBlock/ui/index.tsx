import React, { useEffect, useState } from 'react';

import Wrapper from '../../../../shared/ui/wrapper';
import { useFileUpload } from '../../hooks/useFileUpload';
import { adviсes, blockContent, requirements } from './data';

import styles from './index.module.scss';

const VideoGreetingBlock: React.FC = () => {
  const maxSizeBytes = 20 * 1024 * 1024;
  const acceptTypesVideo = ['video/mp4', 'video/quicktime', 'video/3gpp'];

  const {
    files,
    handleFileChange,
    triggerFileSelect,
    fileInputRef,
    errorMessage
  } = useFileUpload({
    maxFiles: 1,
    acceptTypes: acceptTypesVideo,
    typeConstraints: {
      'video/mp4': { maxSizeBytes },
      'video/quicktime': { maxSizeBytes },
      'video/3gpp': { maxSizeBytes }
    }
  });

  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setVideoPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
        setVideoPreviewUrl(null);
      };
    }
  }, [files]);

  return (
    <Wrapper large className={styles.wrapper}>
      <h3 className={styles['wrapper__title']}>{blockContent.wrapperTitle}</h3>
      <p className={styles['wrapper__description']}>
        {blockContent.wrapperDescription}
      </p>
      {files.length === 0 ? (
        <div className={styles.container_drop}>
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

          <input
            type="file"
            accept="video/mp4,video/quicktime,video/3gpp"
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
      {errorMessage && (
        <div className={styles.errorMessage} style={{ color: 'red' }}>
          {errorMessage}
        </div>
      )}
    </Wrapper>
  );
};

export default VideoGreetingBlock;
