import { ReactNode } from 'react';
import React from 'react';

import styles from './index.module.scss';

import { ILessonsList } from './type';

export const LessonsList: React.FC<ILessonsList> = ({ children }) => {
  const renderChildren = (items: ReactNode): ReactNode => {
    if (React.Children.count(items) !== 0) {
      return <div className={styles.lessonsList}>{items}</div>;
    }

    return (
      <p className={styles.lessonsList__error}>
        У вас пока нет постоянных учеников, проведите первые уроки и составьте
        отчеты
      </p>
    );
  };

  return renderChildren(children);
};
