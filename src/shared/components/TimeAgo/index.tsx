import React from 'react';
import { ITimeAgo } from './type';

const TimeAgo: React.FC<ITimeAgo> = ({ hours = 0, className }) => {
  const getTimeAgoText = (hours: number) => {
    if (hours === 0) return 'Только что';

    const hourText =
      hours % 10 === 1 && hours % 100 !== 11
        ? 'час'
        : hours % 10 >= 2 &&
            hours % 10 <= 4 &&
            (hours % 100 < 10 || hours % 100 >= 20)
          ? 'часа'
          : 'часов';

    return `${hours} ${hourText} назад`;
  };

  return <p className={className}>{getTimeAgoText(hours)}</p>;
};

export default TimeAgo;
