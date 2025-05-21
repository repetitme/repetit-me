import { useEffect, useState } from 'react';

import { TOnChange, TSchedule, TUseSchedule } from './types';

const useSchedule = ({ onChange }: TOnChange): TUseSchedule => {
  const [schedule, setSchedule] = useState<TSchedule>({});

  useEffect(() => {
    const cleanedSchedule: { [key: string]: string[] } = {};

    Object.entries(schedule).forEach(([day, times]) => {
      const cleanedTimes = Object.keys(times);
      cleanedSchedule[day] = cleanedTimes;
    });
    onChange(cleanedSchedule);
  }, [schedule]);

  const handleChange = (day: string, time: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], [time]: !prev[day]?.[time] }
    }));
  };

  const time: string[] = [];
  for (let i = 6; i <= 23; i++) {
    time.push(`${i}:00`);
  }

  return { schedule, time, handleChange };
};

export default useSchedule;
