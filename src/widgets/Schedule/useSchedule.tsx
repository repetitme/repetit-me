import { useEffect, useState } from 'react';

import { TOnChange, TSchedule, TUseSchedule } from './types';

const useSchedule = ({ onChange }: TOnChange): TUseSchedule => {
  const [schedule, setSchedule] = useState<TSchedule>({});
  const [pressedMouse, setPressedMouse] = useState(false);
  const [active, setActive] = useState<string[]>([]);

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

  const handleActive = (day: string, time: string) => {
    handleChange(day, time);
    setActive((prev) => [...prev, day + time]);
  };

  const handleMouse = (pressed: boolean) => {
    setPressedMouse(pressed);
    setActive([]);
  };

  const time: string[] = [];
  for (let i = 6; i <= 23; i++) {
    time.push(`${i}:00`);
  }

  return {
    schedule,
    time,
    pressedMouse,
    active,
    handleActive,
    handleMouse,
    handleChange
  };
};

export default useSchedule;
