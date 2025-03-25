import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

type TabProps = {
  current: 'Как ученик' | 'Как репетитор';
  onClick: (value: string) => void;
};

export const Tab: React.FC<TabProps> = ({ current, onClick }) => {
  return (
    <div className={styles.tabs}>
      <button
        className={classNames(styles.tab, { [styles.current]: current === 'Как ученик' })}
        onClick={() => {
          onClick('Как ученик');
        }}
      >
        {'Как ученик'}
      </button>
      <button
        className={classNames(styles.tab, { [styles.current]: current === 'Как репетитор' })}
        onClick={() => {
          onClick('Как репетитор');
        }}
      >
        {'Как репетитор'}
      </button>
    </div>
  );
};
