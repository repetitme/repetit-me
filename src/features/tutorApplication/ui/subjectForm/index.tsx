import React, { useState } from 'react';

import iconAdd from '../../../../assets/icons/icon_add.svg';
import SubjectFormItem from './subjectFormItem';

import styles from './index.module.scss';

import { Subject, SubjectFormProps } from './type';

const MAX_BLOCKS = 3;

const SubjectForm = ({ onChange }: SubjectFormProps) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Обработчик изменений для каждого предмета
  const handleSubjectChange = (index: number) => (newSubject: Subject) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = newSubject;
    setSubjects(updatedSubjects);
    onChange(updatedSubjects.filter((subject) => subject.isActive)); // Фильтруем активные
  };

  const [blocksData, setBlocksData] = useState<React.ReactNode[]>([
    <SubjectFormItem key={0} index={0} onChange={handleSubjectChange(0)} />
  ]);

  const handleAddBlock = () => {
    if (blocksData.length < MAX_BLOCKS) {
      const newIndex = blocksData.length;
      setBlocksData((prev) => [
        ...prev,
        <SubjectFormItem
          key={newIndex}
          index={newIndex}
          onChange={handleSubjectChange(newIndex)}
        />
      ]);

      // Добавляем пустой предмет в массив
      setSubjects((prev) => [
        ...prev,
        {
          discipline: { value: '', label: '' },
          status: { value: '', label: '' },
          target: { value: '', label: '' },
          experience: '',
          isActive: true,
          categories: []
        }
      ]);
    }
  };

  return (
    <div className={styles.container}>
      {blocksData.map((_, index) => (
        <SubjectFormItem
          key={index}
          index={index}
          onChange={handleSubjectChange(index)}
        />
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
