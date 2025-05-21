import { useEffect, useState } from 'react';

import * as data from './data';

import { TOnChange, TSchedule, TUseSchedule } from './types';

const useSchedule = ({ onChange }: TOnChange): TUseSchedule => {
  const [schedule, setSchedule] = useState<TSchedule>({});
  const [pressedMouse, setPressedMouse] = useState(false);
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    const freeSchedule = data.week.reduce(
      (acc: { [key: string]: string[] }, day) => {
        acc[day] = [...time];
        return acc;
      },
      {}
    );
    const onlyFreeTime: { [key: string]: string[] } = Object.entries(
      freeSchedule
    ).reduce(
      (acc, [day, times]) => {
        const freeTimes = times.filter((time) => !schedule[day]?.[time]);
        if (freeTimes.length > 0) {
          acc[day] = freeTimes;
        }
        return acc;
      },
      {} as { [key: string]: string[] }
    );
    onChange(onlyFreeTime);
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
