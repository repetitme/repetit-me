import { FC, useState } from 'react';

import playerIcon from '../../assets/icons/playerIcon.svg';
import videoMock from '../../assets/images/videoMock.mp4';
import Modal from '../Modal';
import InfoBlock from '../infoBlock';

import styles from './index.module.scss';

interface ITutorVideoStart {
  video: string;
}

const TutorVideoStart: FC<ITutorVideoStart> = ({ video }) => {
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
            src={video}
            onClick={onToggleModalState}
          />
        </div>
      </InfoBlock>

      {openModalState && (
        <Modal close={onToggleModalState}>
          <video controls className={styles.container__full} src={videoMock} />
        </Modal>
      )}
    </>
  );
};
export default TutorVideoStart;
