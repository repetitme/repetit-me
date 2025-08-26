import { FC, useState } from 'react';

import zoom from '../../assets/icons/zoom_in.svg';
import Modal from '../Modal';
import InfoBlock from '../infoBlock';

import styles from './index.module.scss';

interface ITutorDocumentsProps {
  documents: string[];
}

const TutorDiploma: FC<ITutorDocumentsProps> = ({ documents }) => {
  const [openModalState, setOpenModalState] = useState(false);
  const [documentState, setDocumentState] = useState('');

  const onToggleModalState = (document?: string) => {
    setOpenModalState(!openModalState);
    setDocumentState(document ?? '');
  };

  return (
    <>
      <InfoBlock title="Дипломы и сертификаты">
        <div className={styles.container}>
          {documents.map((document, index) => (
            <div
              className={styles.container__document}
              key={index}
              onClick={() => onToggleModalState(document)}
            >
              <img
                className={styles.container__document_img}
                src={document}
                alt="Документ репетитора"
              />
              <img
                className={styles.container__document_zoom}
                src={zoom}
                alt=""
              />
            </div>
          ))}
        </div>
      </InfoBlock>

      {openModalState && (
        <Modal close={onToggleModalState}>
          <img className={styles.container__full} src={documentState} />
        </Modal>
      )}
    </>
  );
};
export default TutorDiploma;
