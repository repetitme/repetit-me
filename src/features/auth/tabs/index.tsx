import React from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

import { TFormTabs } from '../form/types';

// Временный компонент

type TabProps = {
  isStudent: TFormTabs;
  onClick: (value: TFormTabs) => void;
};

enum FormTabs {
  STUDENT = 'Как ученик',
  TEACHER = 'Как репетитор'
}

export const Tab: React.FC<TabProps> = ({ isStudent, onClick }) => {
  return (
    <div className={styles.tabs}>
      {Object.values(FormTabs).map((tab) => (
        <button
          key={tab}
          className={cn(styles.tab, {
            [styles.current]:
              (isStudent && tab === FormTabs.STUDENT) ||
              (!isStudent && tab === FormTabs.TEACHER)
          })}
          onClick={() => {
            onClick(isStudent);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
