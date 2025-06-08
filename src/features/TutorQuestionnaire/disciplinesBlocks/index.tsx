import { useState } from 'react';
import React from 'react';

import iconAdd from './../../../assets/images/icon_add.svg';
import DisciplinesBlock from './disciplinesBlock';

import styles from './index.module.scss';

const MAX_BLOCKS = 3;

const DisciplinesBlocks: React.FC = () => {
  const [blocksData, setBlocksData] = useState<React.ReactNode[]>([
    <DisciplinesBlock key={0} index={0} />
  ]);

  const handleAddBlock = () => {
    if (blocksData.length < MAX_BLOCKS) {
      setBlocksData((prev) => [
        ...prev,
        <DisciplinesBlock key={prev.length} index={prev.length} />
      ]);
    }
  };

  return (
    <div className={styles.container}>
      {blocksData.map((_, index) => (
        <DisciplinesBlock key={index} index={index} />
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

export default DisciplinesBlocks;
