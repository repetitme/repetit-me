import { useState } from 'react';
import React from 'react';

import iconAdd from '../../../../assets/icons/icon_add.svg';
import SubjectFormItem from './subject-form-item';

import styles from './index.module.scss';

const MAX_BLOCKS = 3;

const SubjectForm: React.FC = () => {
  const [blocksData, setBlocksData] = useState<React.ReactNode[]>([
    <SubjectFormItem key={0} index={0} />
  ]);

  const handleAddBlock = () => {
    if (blocksData.length < MAX_BLOCKS) {
      setBlocksData((prev) => [
        ...prev,
        <SubjectFormItem key={prev.length} index={prev.length} />
      ]);
    }
  };

  return (
    <div className={styles.container}>
      {blocksData.map((_, index) => (
        <SubjectFormItem key={index} index={index} />
      ))}
      {blocksData.length < MAX_BLOCKS && (
        <button
          className={styles['options__added-disciplines']}
          onClick={handleAddBlock}
        >
          <img src={iconAdd} alt="Добавить предмет" />
          <p>{`Добавить предмет (доступно ${MAX_BLOCKS - blocksData.length} из ${MAX_BLOCKS})`}</p>
        </button>
      )}
    </div>
  );
};

export default SubjectForm;
