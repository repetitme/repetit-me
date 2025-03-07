import React from 'react';
import './tabs.scss';

type tabProps = {
  active: boolean;
  value: string;
  onClick: (value: string) => void;
};

export const Tab: React.FC<tabProps> = ({
  active,
  value,
  onClick
}) => {
  return (
    <button className={`tab ${active ? 'current' : ''}`} onClick={() => onClick(value)}>
        {value}
    </button>
  );
};
