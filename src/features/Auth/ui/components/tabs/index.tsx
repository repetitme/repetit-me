import React from 'react';

import cn from 'classnames';

import { FormTabs } from '../../../constants';

import styles from './index.module.scss';

import { TFormTabs } from '../../../types';

type TabProps = {
  currentTab: TFormTabs;
  onClick: (value: TFormTabs) => void;
};

export const Tab: React.FC<TabProps> = ({ currentTab, onClick }) => {
  return (
    <div className={styles.tabs}>
      {Object.values(FormTabs).map((tab) => (
        <button
          key={tab}
          className={cn(styles.tab, {
            [styles.current]: currentTab === tab
          })}
          onClick={() => {
            onClick(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
