import { FC, useState } from 'react';

import playerIcon from '../../assets/icons/playerIcon.svg';
import videoMock from '../../assets/images/videoMock.mp4';
import Modal from '../Modal';
import InfoBlock from '../infoBlock';

import styles from './index.module.scss';

const TutorVideoStart: FC = () => {
  const [openModalState, setOpenModalState] = useState(false);

  const onToggleModalState = () => {
    setOpenModalState(!openModalState);
  };

  return (
    <>
      <InfoBlock title="Видеоприветствие">
        <div className={styles.container}>
          <img className={styles.container__icon} src={playerIcon} />
          <video
            className={styles.container__file}
            src={videoMock}
            onClick={onToggleModalState}
          />
        </div>
      </InfoBlock>

      {openModalState && (
        <Modal
          onToggleModalState={onToggleModalState}
          openModalState={openModalState}
        >
          <div className={styles.container__videos_video}>
            <video
              controls
              className={styles.container__full}
              src={videoMock}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
export default TutorVideoStart;
