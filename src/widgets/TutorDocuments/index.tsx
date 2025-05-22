import { FC } from 'react';

import { mockTutors } from '../UserCard/fakeApi/mockData';

import styles from './index.module.scss';

const TutorDocuments: FC = () => (
  <div className={styles.container}>
    <h3 className={styles.container__title}>Дипломы и сертификаты</h3>
    <div className={styles.container__documents}>
      {mockTutors[0].documents.map((document, index) => (
        <div className={styles.container__documents_document}>
          <img
            className={styles.container__documents_document_img}
            key={index}
            src={document}
          />
        </div>
      ))}
    </div>
  </div>
);

export default TutorDocuments;
