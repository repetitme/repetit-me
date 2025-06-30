import { FC } from 'react';

import { mockTutors } from '../UserCard/fakeApi/mockData';
import InfoBlock from '../infoBlock';

import styles from './index.module.scss';

const TutorDiploma: FC = () => (
  <InfoBlock title="Дипломы и сертификаты">
    <div className={styles.container}>
      {mockTutors[0].documents.map((document, index) => (
        <div className={styles.container__document} key={index}>
          <img
            className={styles.container__document_img}
            src={document}
            alt="Документ репетитора"
          />
        </div>
      ))}
    </div>
  </InfoBlock>
);
export default TutorDiploma;
