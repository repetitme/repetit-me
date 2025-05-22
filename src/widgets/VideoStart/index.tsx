import { FC } from 'react';

import videoMock from '../../assets/images/videoMock1.mp4';

import styles from './index.module.scss';

const VideoStart: FC = () => {
  const mockTutors: string[] = [videoMock, videoMock];

  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Видеоприветствие</h3>
      <div className={styles.container__videos}>
        {mockTutors.map((video, index) => (
          <div className={styles.container__videos_video}>
            <video
              className={styles.container__videos_video_file}
              key={index}
              src={video}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VideoStart;
