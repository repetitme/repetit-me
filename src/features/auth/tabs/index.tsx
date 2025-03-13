import React from 'react';
import './tabs.scss';

type tabProps = {
  current: string;
  onClick: (value: string) => void;
};

export const Tab: React.FC<tabProps> = ({ current, onClick }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${current === 'Как ученик' ? 'current' : ''}`}
        onClick={() => {
          onClick('Как ученик');
        }}
      >
        {'Как ученик'}
      </button>
      <button
        className={`tab ${current === 'Как репетитор' ? 'current' : ''}`}
        onClick={() => {
          onClick('Как репетитор');
        }}
      >
        {'Как репетитор'}
      </button>
    </div>
  );
};
