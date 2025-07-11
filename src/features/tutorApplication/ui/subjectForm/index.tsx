import React, { useState } from 'react';

import iconAdd from '../../../../assets/icons/icon_add.svg';
import SubjectFormItem from './subjectFormItem';

import styles from './index.module.scss';

import { Subject, SubjectFormProps } from './type';

const MAX_BLOCKS = 3;

const SubjectForm = ({ onChange, initialData }: SubjectFormProps) => {
  const [subjects, setSubjects] = useState<Subject[]>(initialData);

  // Обработчик изменений для каждого предмета
  const handleSubjectChange = (index: number) => (newSubject: Subject) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = newSubject;
    setSubjects(updatedSubjects);
    onChange(updatedSubjects.filter((subject) => subject.isActive)); // Фильтруем активные
  };

 const [blocksCount, setBlocksCount] = useState(1);

  const handleAddBlock = () => {
    if (blocksCount < MAX_BLOCKS) {
      setBlocksCount(prev => prev + 1);
      setSubjects(prev => [
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
       {Array.from({ length: blocksCount }).map((_, index) => (
        <SubjectFormItem
          key={index}
          index={index}
          onChange={handleSubjectChange(index)}
        />
      ))}
      {blocksCount < MAX_BLOCKS && (
        <button
          className={styles['options__added-disciplines']}
          onClick={handleAddBlock}
        >
          <img src={iconAdd} alt="Добавить предмет" />
          <p>{`Добавить предмет (доступно ${MAX_BLOCKS - blocksCount} из ${MAX_BLOCKS})`}</p>
        </button>
      )}
    </div>
  );
};

export default SubjectForm;
