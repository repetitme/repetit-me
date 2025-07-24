import { useState } from 'react';

import iconAdd from '../../../../assets/icons/icon_add.svg';
import SubjectFormItem from './subjectFormItem';

import styles from './index.module.scss';

import { Subject, SubjectFormProps, initialSubject } from './type';

const MAX_BLOCKS = 3;

const SubjectForm = ({ onChange, initialData }: SubjectFormProps) => {
  const [subjects, setSubjects] = useState<Subject[]>(
    initialData.length > 0 ? initialData : [initialSubject]
  );

  const handleSubjectChange = (index: number) => (newSubject: Subject) => {
    const updatedSubjects = subjects.map((subject, i) =>
      i === index ? newSubject : subject
    );
    setSubjects(updatedSubjects);
    onChange(updatedSubjects);
  };

  const handleAddBlock = () => {
    if (subjects.length < MAX_BLOCKS) {
      setSubjects((prev) => [...prev, initialSubject]);
    }
  };

  return (
    <div className={styles.container}>
      {subjects.map((subject, index) => (
        <SubjectFormItem
          key={index}
          index={index}
          onChange={handleSubjectChange(index)}
          initialData={subject}
        />
      ))}
      {subjects.length < MAX_BLOCKS && (
        <button
          className={styles['options__added-disciplines']}
          onClick={handleAddBlock}
        >
          <img src={iconAdd} alt="Добавить предмет" />
          <p>{`Добавить предмет (доступно ${MAX_BLOCKS - subjects.length} из ${MAX_BLOCKS})`}</p>
        </button>
      )}
    </div>
  );
};

export default SubjectForm;
